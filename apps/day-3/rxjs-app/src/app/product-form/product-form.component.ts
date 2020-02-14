import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: Product = new Product();

  constructor(private productsService: ProductsService) { }

  ngOnInit() { }

  onSubmit() {
    this.productsService.createProduct(this.product);
    this.product = new Product();
  }

}
