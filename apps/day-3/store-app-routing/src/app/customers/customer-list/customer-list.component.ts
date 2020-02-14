import { Component, OnInit } from '@angular/core';

import { Customer } from '../../models/customer';
import { CustomersService } from '../../services/customers.service';
import { LoggingService } from '../../services/logging.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[];

  constructor(
    private customersSerivce: CustomersService,
    private loggingService: LoggingService
  ) { }

  ngOnInit() {
    this.customers = this.customersSerivce.getCustomers();
  }

  onAdd() {
    this.loggingService.logMessage('Customer List - Add button clicked.')
  }
}
