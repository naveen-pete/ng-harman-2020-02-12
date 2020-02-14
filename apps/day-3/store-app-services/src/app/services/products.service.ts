import { Injectable } from '@angular/core';

import { Product } from '../models/product';
import { LoggerService } from './logger.service';

@Injectable()
export class ProductsService {
  products: Product[] = [
    {
      id: 1,
      name: 'Galaxy 10',
      description: 'A product from Samsung',
      price: 80000,
      isAvailable: true
    },
    {
      id: 2,
      name: 'iPhone 10',
      description: 'A product from Apple',
      price: 70000,
      isAvailable: false
    },
    {
      id: 3,
      name: 'Google Pixel 3',
      description: 'A product from Google',
      price: 60000,
      isAvailable: true
    }
  ];

  constructor(private loggerService: LoggerService) { }

  getProducts() {
    this.loggerService.log('Getting products..');
    return this.products;
  }

  addProduct(product: Product) {
    this.products.unshift(product);
  }

}
