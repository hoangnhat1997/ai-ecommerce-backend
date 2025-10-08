import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { AiModule } from './ai/ai.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ProductsModule,
    CartModule,
    AiModule,
    AuthModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
