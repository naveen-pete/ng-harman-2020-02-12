import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private customerSubject: BehaviorSubject<Customer>;

  constructor() {
    const defaultCustomer: Customer = {
      name: 'default',
      email: 'abc@example.com'
    };

    this.customerSubject = new BehaviorSubject<Customer>(defaultCustomer);
  }

  get customerCreated() {
    return this.customerSubject.asObservable();
  }

  createCustomer(customer: Customer) {
    this.customerSubject.next(customer);
  }
}
