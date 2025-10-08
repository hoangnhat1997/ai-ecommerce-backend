import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  await prisma.product.createMany({
    data: [
      {
        name: 'iPhone 16 Pro Max',
        description: 'Flagship Apple với chip A18 Pro.',
        price: 32990000,
        imageUrl:
          'https://cdn.tgdd.vn/Products/Images/44/331570/s16/macbook-pro-14-inch-m4-pro-topzone-den-thumb-1-650x650.png',
        stock: 10,
      },
      {
        name: 'MacBook Air M3',
        description: 'Mỏng nhẹ, hiệu năng cao với chip M3.',
        price: 29990000,
        imageUrl:
          'https://cdn.tgdd.vn/Products/Images/44/331570/s16/macbook-pro-14-inch-m4-pro-topzone-den-thumb-1-650x650.png',
        stock: 10,
      },
      {
        name: 'Tai nghe Sony WH-1000XM5',
        description: 'Chống ồn chủ động hàng đầu thế giới.',
        price: 8990000,
        imageUrl:
          'https://cdn.tgdd.vn/Products/Images/44/331570/s16/macbook-pro-14-inch-m4-pro-topzone-den-thumb-1-650x650.png',
        stock: 10,
      },
      {
        name: 'Chuột Logitech MX Master 3S',
        description: 'Chuột gaming với độ phân giải 10000 DPI.',
        price: 130,
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
      {
        name: 'Màn hình Samsung Odyssey G9',
        description: 'Màn hình gaming với độ phân giải 4K 1000nits.',
        price: 3500,
        imageUrl:
          'https://cdn.tgdd.vn/Products/Images/44/331570/s16/macbook-pro-14-inch-m4-pro-topzone-den-thumb-1-650x650.png',
        stock: 10,
      },
      {
        name: 'Router WiFi AX3000',
        description: 'Router WiFi với độ phân giải 4K 1000nits.',
        price: 250,
        imageUrl:
          'https://cdn.tgdd.vn/Products/Images/44/331570/s16/macbook-pro-14-inch-m4-pro-topzone-den-thumb-1-650x650.png',
        stock: 10,
      },
    ],
  });

  console.log('✅ Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
