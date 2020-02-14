import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../services/products.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  // productsService: ProductsService;

  constructor(private productsService: ProductsService) {
    console.log('ProductsComponent constructor invoked.');
    // this.productsService = productsService;
  }

  ngOnInit(): void {
    console.log('ProductsComponent ngOnInit invoked.');
    this.products = this.productsService.getProducts();
  }

  // onProductCreated(newProduct: Product) {
  //   this.products.unshift(newProduct);
  // }
}
