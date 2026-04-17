import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import type { Transporter } from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter: Transporter;
  private readonly from: string;
  private readonly to: string;
  private readonly logger = new Logger(EmailService.name);

  constructor(private configService: ConfigService) {
    const host = this.configService.get<string>('SMTP_HOST');
    const portRaw = this.configService.get<string>('SMTP_PORT');
    const secureRaw = this.configService.get<string>('SMTP_SECURE');
    const user = this.configService.get<string>('SMTP_USER');
    const pass = this.configService.get<string>('SMTP_PASSWORD');
    const to =
      this.configService.get<string>('ORDER_NOTIFICATION_EMAIL') ||
      this.configService.get<string>('EMAIL_TO');

    this.from = this.configService.get<string>(
      'EMAIL_FROM',
      'no-reply@example.com',
    );
    this.to = to || 'orders@example.com';

    const port = portRaw ? Number(portRaw) : 587;
    const secure = secureRaw === 'true';

    if (!host || !user || !pass) {
      this.logger.warn(
        'EmailService: SMTP_HOST, SMTP_USER или SMTP_PASSWORD не заданы. Отправка почты может не работать.',
      );
    }

    this.transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
    });
  }

  async sendOrderNotification(order: Record<string, any>): Promise<void> {
    const createdAt = order.createdAt
      ? new Date(order.createdAt).toLocaleString('ru-RU', {
          timeZone: 'Asia/Yekaterinburg',
        })
      : '-';

    const html = `
      <h3>Новый заказ с сайта</h3>
      <p><strong>Имя:</strong> ${order.name || '-'}</p>
      <p><strong>Адрес:</strong> ${order.adress || '-'}</p>
      <p><strong>Телефон:</strong> ${order.phone || '-'}</p>
      <p><strong>Состав заказа:</strong> ${order.orderString || '-'}</p>
      <p><strong>Комментарий:</strong> ${order.comment || '-'}</p>
      <p><strong>Дата:</strong> ${createdAt}</p>
    `;

    await this.transporter.sendMail({
      from: this.from,
      to: this.to,
      subject: `Новый заказ: ${order.name || 'заказ'}`,
      html,
    });
  }
}
