import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomersService } from '../services/customers.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  customer: Customer = new Customer();

  constructor(private customersService: CustomersService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.customersService.createCustomer(this.customer);
    this.customer = new Customer();
  }

}
