import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productName: string = 'Apple iPhone';
  productPrice: number = 60000;

  constructor() { }

  ngOnInit(): void {
  }

  onSave() {
    console.log('Product saved.');
  }

  onChange(e: any) {
    console.log('search value changed. e:', e.target.value);
  }

}
