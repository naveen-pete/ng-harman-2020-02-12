import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CustomersService } from '../services/customers.service';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit, OnDestroy {
  customer: Customer;
  subscription: Subscription;

  constructor(private customersService: CustomersService) { }

  ngOnInit() {
    this.subscription = this.customersService.customerCreated.subscribe(
      customer => this.customer = customer
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
