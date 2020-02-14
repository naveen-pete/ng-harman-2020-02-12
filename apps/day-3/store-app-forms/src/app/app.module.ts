import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';

@NgModule({
  declarations: [AppComponent, ProductFormComponent, CustomerFormComponent],
  imports: [
    BrowserModule,
    FormsModule, // Required for Template Driven Forms
    ReactiveFormsModule // Required for Reactive Forms
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
