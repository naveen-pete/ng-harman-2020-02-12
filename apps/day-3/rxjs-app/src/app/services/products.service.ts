import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productSubject: Subject<Product>;

  constructor() {
    this.productSubject = new Subject<Product>();
  }

  get productCreated() {
    return this.productSubject.asObservable();
  }

  createProduct(product: Product) {
    this.productSubject.next(product);
  }
}
