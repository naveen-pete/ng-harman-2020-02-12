import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

import { SearchPostsComponent } from './search-posts/search-posts.component';
import { SubjectComponent } from './subject/subject.component';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'switch-map', component: SearchPostsComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'behavior-subject', component: BehaviorSubjectComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    NavComponent,

    SearchPostsComponent,
    SubjectComponent,

    ProductListComponent,
    ProductFormComponent,
    ProductDetailComponent,

    CustomerListComponent,
    CustomerFormComponent,
    CustomerDetailComponent,
    BehaviorSubjectComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
