import { Injectable, Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EmailService } from 'src/email/email.service';

@Injectable()
export class OrdersService {
  private readonly logger = new Logger(OrdersService.name);

  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
    private readonly emailService: EmailService,
  ) {}
  findAll(): Promise<Order[]> {
    return this.orderRepository.find({ order: { createdAt: 'DESC' } });
  }

  async create(createOrderDto: Partial<Order>): Promise<Order> {
    const order = await this.orderRepository.save(createOrderDto);

    try {
      await this.emailService.sendOrderNotification(order);
    } catch (error) {
      this.logger.error('Не удалось отправить уведомление по email', error);
    }

    return order;
  }
  remove(id: number) {
    return this.orderRepository.delete({ id });
  }
}
