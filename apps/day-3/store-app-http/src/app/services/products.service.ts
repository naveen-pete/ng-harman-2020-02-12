import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Product } from '../models/product';

@Injectable()
export class ProductsService {
  private apiUrl = 'http://localhost:3000/products';
  private products: Product[];

  constructor(private http: HttpClient) {
    this.products = [];
  }

  getProducts(): Observable<Product[]> {
    const headers = new HttpHeaders().set('MyAuthHeader', 'abc123');
    return this.http.get<Product[]>(this.apiUrl, { headers: headers })
      .pipe(
        retry(3),
        catchError(error => {
          console.log('Actual error:', error);
          return throwError(new Error('Failed to connect to the server. Please contact Customer Support'));
        })
      );
  }

  getProduct(id: number) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  updateProduct(id: number, productInfo: Product) {
    // const product = this.getProduct(id);

    // if (product) {
    //   product.name = productInfo.name;
    //   product.description = productInfo.description;
    //   product.isAvailable = productInfo.isAvailable;
    //   product.price = productInfo.price;
    // }
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
