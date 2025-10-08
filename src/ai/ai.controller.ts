import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { AiService } from './ai.service';

@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Get('recommend')
  getRecommendations(@Query('userId') _userId: string) {
    return this.aiService.getProductRecommendations(_userId);
  }

  @Post('generate-description')
  generateDescription(@Body('name') name: string) {
    return this.aiService.generateProductDescription(name);
  }
}
