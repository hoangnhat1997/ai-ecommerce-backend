import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { AiModule } from './ai/ai.module';

@Module({
  imports: [ConfigModule.forRoot(), ProductsModule, CartModule, AiModule],
  providers: [PrismaService],
})
export class AppModule {}
