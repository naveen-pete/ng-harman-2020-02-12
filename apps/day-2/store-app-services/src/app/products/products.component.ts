import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
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

  constructor() {
  }

  ngOnInit(): void {
  }

  onProductCreated(newProduct: Product) {
    this.products.unshift(newProduct);
  }
}
