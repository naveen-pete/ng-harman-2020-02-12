import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product = new Product();

  constructor() { }

  ngOnInit(): void {
  }

  applyBadge() {
    return this.product.isAvailable ? 'badge-success' : 'badge-warning';
  }


}
