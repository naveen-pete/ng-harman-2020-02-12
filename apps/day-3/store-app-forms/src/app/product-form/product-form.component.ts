import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productName = 'abc';
  showMessage = false;
  @ViewChild('f', { static: false }) form: NgForm;

  constructor() { }

  ngOnInit() { }

  onSubmit() {
    console.log('Product form submitted.');
    console.log('form:', this.form.value);
    this.form.reset();
    // var form = document.getElementById('productForm')
  }
}
