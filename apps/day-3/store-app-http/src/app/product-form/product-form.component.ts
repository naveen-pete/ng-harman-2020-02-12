import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  id: number;
  product: Product;
  addNew: boolean;
  @ViewChild('f', { static: false }) productForm: NgForm;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductsService
  ) {
    this.product = new Product();
    this.addNew = true;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id'] !== 'new') {
        this.id = +params.id;
        const p = this.service.getProduct(this.id);


        if (p) {
          Object.assign(this.product, p);
          // this.addNew = false;
        }
      }
    });
  }

  onSubmit() {
    this.product.name = this.productForm.value.name;
    this.product.description = this.productForm.value.description;
    this.product.price = +this.productForm.value.price;
    this.product.isAvailable = this.productForm.value.isAvailable
      ? this.productForm.value.isAvailable
      : false;

    if (this.addNew) {
      this.service.addProduct(this.product).subscribe(
        (product) => {
          console.log('product:', product);
          this.router.navigate(['/products']);
        },
        (error) => {
          console.log('Add product failed.');
          console.log('Error:', error);
        }
      );
    } else {
      this.service.updateProduct(this.id, this.product);
    }

  }
}
