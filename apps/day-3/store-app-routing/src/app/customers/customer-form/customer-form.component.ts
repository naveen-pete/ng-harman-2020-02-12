import { Component, OnInit } from '@angular/core';

import { Customer } from '../../models/customer';
import { CustomersService } from '../../services/customers.service';
import { LoggingService } from '../../services/logging.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  showMessage = false;
  customer: Customer;
  id: number = 4;

  constructor(
    private customersService: CustomersService,
    private loggingService: LoggingService
  ) { }

  ngOnInit() {
    this.customer = this.customersService.getCustomer(this.id);
  }

  onSave() {
    this.loggingService.logMessage('Customer Form - Save button clicked.');
  }
}
