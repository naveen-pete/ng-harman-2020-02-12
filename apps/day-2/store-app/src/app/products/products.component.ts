import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // product: Product = {
  //   id: 1,
  //   name: 'Galaxy 10',
  //   description: 'A product from Samsung',
  //   price: 80000,
  //   isAvailable: true
  // };

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
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  applyBadge(product) {
    return product.isAvailable ? 'badge-success' : 'badge-warning';
  }

}

class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
}
