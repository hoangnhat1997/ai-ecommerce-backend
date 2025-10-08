import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { AiService } from './ai.service';

@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Get('recommend')
  async getRecommendations(@Query('userId') userId: string) {
    return this.aiService.getProductRecommendations(userId);
  }

  @Post('generate-description')
  async generateDescription(@Body('name') name: string) {
    return this.aiService.generateProductDescription(name);
  }
}
