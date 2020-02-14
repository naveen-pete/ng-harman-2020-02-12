import { Component, OnInit } from '@angular/core';

import { Customer } from '../../models/customer';
import { CustomersService } from '../../services/customers.service';
import { LoggingService } from '../../services/logging.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  customer: Customer;
  id: number = 2;

  constructor(
    private customersService: CustomersService,
    private loggingService: LoggingService
  ) {}

  ngOnInit() {
    this.customer = this.customersService.getCustomer(this.id);
  }

  onEdit() {
    this.loggingService.logMessage('Customer Detail - Edit button clicked.');
  }

  onDelete() {
    this.loggingService.logMessage('Customer Detail - Delete button clicked.');
  }
}
