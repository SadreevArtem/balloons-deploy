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
      <!DOCTYPE html>
      <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          body { margin: 0; padding: 0; background: #f4f6f8; font-family: Arial, Helvetica, sans-serif; }
          .wrapper { width: 100%; max-width: 680px; margin: 0 auto; padding: 24px; }
          .card { width: 100%; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 0 20px rgba(0, 0, 0, 0.08); }
          .header { background: #1d4ed8; padding: 24px; text-align: center; color: #ffffff; }
          .title { margin: 0; font-size: 24px; line-height: 1.2; }
          .subtitle { margin: 8px 0 0; font-size: 14px; opacity: 0.9; }
          .content { padding: 24px; }
          .row { padding: 14px 0; border-bottom: 1px solid #e5e7eb; }
          .label { display: block; color: #111827; font-size: 14px; margin-bottom: 6px; }
          .value { color: #374151; font-size: 15px; white-space: pre-wrap; word-break: break-word; }
          .footer { background: #f8fafc; padding: 18px 24px; color: #6b7280; font-size: 13px; }
          @media screen and (max-width: 520px) {
            .wrapper { padding: 16px; }
            .header { padding: 18px; }
            .content { padding: 18px; }
            .row { padding: 12px 0; }
            .title { font-size: 22px; }
            .label, .value { font-size: 14px; }
          }
        </style>
      </head>
      <body>
        <table class="wrapper" align="center" width="100%" cellpadding="0" cellspacing="0" role="presentation">
          <tr>
            <td>
              <table class="card" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td class="header">
                    <h1 class="title">Новый заказ с сайта</h1>
                    <p class="subtitle">Поступила новая заявка, проверьте данные ниже</p>
                  </td>
                </tr>
                <tr>
                  <td class="content">
                    <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;" role="presentation">
                      <tr>
                        <td class="row">
                          <strong class="label">Имя</strong>
                          <span class="value">${order.name || '-'}</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="row">
                          <strong class="label">Адрес</strong>
                          <span class="value">${order.adress || '-'}</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="row">
                          <strong class="label">Телефон</strong>
                          <span class="value">${order.phone || '-'}</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="row">
                          <strong class="label">Состав заказа</strong>
                          <span class="value">${order.orderString || '-'}</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="row">
                          <strong class="label">Комментарий</strong>
                          <span class="value">${order.comment || '—'}</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong class="label">Дата заказа</strong>
                          <span class="value">${createdAt}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td class="footer">
                    <p style="margin: 0;">Это уведомление сформировано автоматически. Не отвечайте на этот email.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    await this.transporter.sendMail({
      from: this.from,
      to: this.to,
      subject: `Новый заказ: ${order.name || 'заказ'}`,
      html,
    });
  }
}
