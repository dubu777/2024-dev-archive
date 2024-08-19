import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Cart } from './cart.entity';
import { Product } from 'src/product/product.entity';

export const mockOrderItemsWithDeliveryFee = [
  {
    id: 1,
    quantity: 1,
    product: {
      id: 1,
      name: '나이키',
      price: 500,
      imageUrl: 'https://matzip-s3-jh.s3.ap-northeast-2.amazonaws.com/original/KakaoTalk_20221117_165403005_01.jpg',
      category: 'fashion',
    },
  },
  {
    id: 2,
    quantity: 2,
    product: {
      id: 2,
      name: '뉴발란스',
      price: 7000,
      imageUrl: 'https://matzip-s3-jh.s3.ap-northeast-2.amazonaws.com/original/KakaoTalk_20221117_170233922.jpg',
      category: 'fashion',
    },
  },
  {
    id: 3,
    quantity: 4,
    product: {
      id: 3,
      name: '아디다스',
      price: 6000,
      imageUrl: 'https://matzip-s3-jh.s3.ap-northeast-2.amazonaws.com/original/KakaoTalk_20221117_165742580.jpg',
      category: 'fashion',
    },
  },
];

@Injectable()
export class CartService implements OnModuleInit {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(Cart)
    private cartItemRepository: Repository<Cart>,
  ) {}

  async onModuleInit() {
    await this.initializeData();
  }

  async initializeData() {
    await this.cartItemRepository.query('TRUNCATE TABLE "cart_item" CASCADE');
    await this.productRepository.query('TRUNCATE TABLE "product" CASCADE');

    for (const item of mockOrderItemsWithDeliveryFee) {
      const product = await this.productRepository.save(item.product);
      await this.cartItemRepository.save({
        quantity: item.quantity,
        product: product,
      });
    }
  }

  async getCartItems(): Promise<Cart[]> {
    return this.cartItemRepository.find({relations: ['product']})
  }
}
