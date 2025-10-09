import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { AiModule } from './ai/ai.module';
import { AuthModule } from './auth/auth.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ProductsModule,
    CartModule,
    AiModule,
    AuthModule,
    OrdersModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
