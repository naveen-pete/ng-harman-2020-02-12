import { Component, OnInit, OnDestroy } from '@angular/core';

import { Product } from '../models/product';
import { Subscription } from 'rxjs';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  subscription: Subscription;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.subscription = this.productsService.productCreated.subscribe(
      product => this.products.push(product)
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
