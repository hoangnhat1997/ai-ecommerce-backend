import { Injectable } from '@nestjs/common';

// Tương lai có thể import OpenAI hoặc model nội bộ:
// import OpenAI from 'openai'

@Injectable()
export class AiService {
  // Gợi ý sản phẩm dựa vào lịch sử hoặc AI mock
  getProductRecommendations(query: string) {
    // TODO: gọi model AI hoặc dữ liệu từ Prisma
    return [
      {
        name: 'Màn hình Samsung Odyssey G9',
        description: 'Màn hình gaming với độ phân giải 4K 1000nits.',
        price: 3500,
        imageUrl:
          'https://cdn.tgdd.vn/Products/Images/44/331570/s16/macbook-pro-14-inch-m4-pro-topzone-den-thumb-1-650x650.png',
        stock: 10,
      },
      {
        name: 'Bàn phím cơ Cherry MX Red',
        description: 'Bàn phím gaming với switch Cherry MX Red.',
        price: 150,
        imageUrl:
          'https://cdn.tgdd.vn/Products/Images/44/331570/s16/macbook-pro-14-inch-m4-pro-topzone-den-thumb-1-650x650.png',
        stock: 10,
      },
    ];
  }

  // Sinh mô tả sản phẩm tự động (mock)
  generateProductDescription(name: string) {
    // Ở bản thật, bạn sẽ gọi AI API (OpenAI, Gemini, hoặc model nội bộ)
    return `Sản phẩm ${name} được thiết kế tinh tế, hiệu năng vượt trội và phù hợp với người dùng hiện đại.`;
  }
}
