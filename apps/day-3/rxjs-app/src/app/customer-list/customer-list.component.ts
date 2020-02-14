import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { Subscription } from 'rxjs';
import { CustomersService } from '../services/customers.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  subscription: Subscription;

  constructor(private customersService: CustomersService) { }

  ngOnInit() {
    this.subscription = this.customersService.customerCreated.subscribe(
      customer => this.customers.push(customer)
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
