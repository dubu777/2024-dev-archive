import { Items } from "../../types/Item";


export const mockOrderItemsWithDeliveryFee: Items[] = [
  {
    id: 1,
    quantity: 1,
    product: {
      id: 1,
      name: '나이키',
      price: 500,
      imageUrl: 'sample.com',
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
      imageUrl: 'sample.com',
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
      imageUrl: 'sample.com',
      category: 'fashion',
    },
  },
];

export const mockOrderItemsWithOutDeliveryFee: Items[] = [
  {
    id: 1,
    quantity: 1,
    product: {
      id: 1,
      name: '나이키',
      price: 50000,
      imageUrl: 'sample.com',
      category: 'fashion',
    },
  },
  {
    id: 2,
    quantity: 2,
    product: {
      id: 2,
      name: '뉴발란스',
      price: 70000,
      imageUrl: 'sample.com',
      category: 'fashion',
    },
  },
  {
    id: 3,
    quantity: 4,
    product: {
      id: 3,
      name: '아디다스',
      price: 60000,
      imageUrl: 'sample.com',
      category: 'fashion',
    },
  },
];
