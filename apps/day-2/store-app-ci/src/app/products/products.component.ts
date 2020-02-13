import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  showMessage = false;

  product: Product = new Product();

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

  applyBadge(product) {
    return product.isAvailable ? 'badge-success' : 'badge-warning';
  }

  onSave() {
    this.product.id = Date.now();
    this.products.unshift(this.product);
    this.product = new Product();
    this.showMessage = true;

    setTimeout(() => {
      this.showMessage = false;
    }, 4000);
  }
}

class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
}
