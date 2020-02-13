import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../services/products.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor() {
    const service = new ProductsService();
    this.products = service.getProducts();
  }

  ngOnInit(): void {
  }

  onProductCreated(newProduct: Product) {
    this.products.unshift(newProduct);
  }
}
