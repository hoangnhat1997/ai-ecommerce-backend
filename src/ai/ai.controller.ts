import { Controller, Post, Body } from '@nestjs/common';
import { AiService } from './ai.service';

@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post('recommend')
  getRecommendations(@Body('query') query: string) {
    return this.aiService.getProductRecommendations(query);
  }

  @Post('generate-description')
  generateDescription(@Body('name') name: string) {
    return this.aiService.generateProductDescription(name);
  }
}
