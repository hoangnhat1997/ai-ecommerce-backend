import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class OrdersService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  async createOrder(
    userId: number,
    items: { productId: number; quantity: number; price: number }[],
  ) {
    const totalAmount = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

    return await this.prisma.order.create({
      data: {
        userId,
        totalAmount,
        items: {
          create: items.map((i) => ({
            productId: i.productId,
            quantity: i.quantity,
            price: i.price,
          })),
        },
      },
      include: { items: true },
    });
  }

  async getMyOrders(userId: number) {
    return await this.prisma.order.findMany({
      where: { userId },
      include: { items: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getAllOrders(adminId?: number) {
    // (Có thể thêm logic kiểm tra quyền admin sau)
    return await this.prisma.order.findMany({
      include: { user: true, items: true },
      orderBy: { createdAt: 'desc' },
    });
  }
}
