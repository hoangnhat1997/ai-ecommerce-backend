import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CartService {
  constructor(private prisma: PrismaService) {}

  async addToCart(userId: string, productId: string, quantity: number = 1) {
    let cart = await this.prisma.cart.findFirst({
      where: { userId },
      include: { items: true },
    });
    if (!cart) {
      cart = await this.prisma.cart.create({ data: { userId } });
    }

    const existing = cart.items.find((i) => i.productId === productId);
    if (existing) {
      return this.prisma.cartItem.update({
        where: { id: existing.id },
        data: { quantity: existing.quantity + quantity },
      });
    }

    return this.prisma.cartItem.create({
      data: { cartId: cart.id, productId, quantity },
    });
  }

  getCart(userId: string) {
    return this.prisma.cart.findFirst({
      where: { userId },
      include: { items: { include: { product: true } } },
    });
  }

  clearCart(userId: string) {
    return this.prisma.cart.deleteMany({ where: { userId } });
  }
}
