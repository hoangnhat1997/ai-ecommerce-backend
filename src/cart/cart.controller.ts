import { Controller, Post, Body, Get, Delete } from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('add')
  addToCart(
    @Body() body: { userId: string; productId: string; quantity?: number },
  ) {
    return this.cartService.addToCart(
      body.userId,
      body.productId,
      body.quantity,
    );
  }

  @Get(':userId')
  getCart(@Body('userId') userId: string) {
    return this.cartService.getCart(userId);
  }

  @Delete(':userId')
  clearCart(@Body('userId') userId: string) {
    return this.cartService.clearCart(userId);
  }
}
