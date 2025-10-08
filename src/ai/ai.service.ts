import { Injectable } from '@nestjs/common';

// Tương lai có thể import OpenAI hoặc model nội bộ:
// import OpenAI from 'openai'

@Injectable()
export class AiService {
  // Gợi ý sản phẩm dựa vào lịch sử hoặc AI mock
  getProductRecommendations(_userId: string) {
    // TODO: gọi model AI hoặc dữ liệu từ Prisma
    return [
      { id: 1, name: 'Tai nghe Sony WH-1000XM5', score: 0.92 },
      { id: 2, name: 'Laptop ASUS Zenbook', score: 0.88 },
    ];
  }

  // Sinh mô tả sản phẩm tự động (mock)
  generateProductDescription(name: string) {
    // Ở bản thật, bạn sẽ gọi AI API (OpenAI, Gemini, hoặc model nội bộ)
    return `Sản phẩm ${name} được thiết kế tinh tế, hiệu năng vượt trội và phù hợp với người dùng hiện đại.`;
  }
}
