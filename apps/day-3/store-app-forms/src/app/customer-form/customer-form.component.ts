import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

import { AppValidators } from '../app-validators';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  form: FormGroup;
  showMessage = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), AppValidators.cannotContainSpace], AppValidators.shouldBeUnique),
      contact: new FormGroup({
        phone: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email])
      }),
      city: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    console.log('Customer form submitted..');
    console.log('value:', this.form.value);
  }












  // Create form using FormGroup & FormControl
  private createForm() {
    this.form = new FormGroup({
      name: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          AppValidators.cannotContainSpace
        ],
        AppValidators.shouldBeUnique
      ),
      contact: new FormGroup({
        phone: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email])
      }),
      city: new FormControl('', Validators.required)
    });
  }

  // Create form using FormBuilder
  private createFormWithFormBuilder() {
    this.form = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          AppValidators.cannotContainSpace
        ],
        AppValidators.shouldBeUnique
      ],
      contact: this.fb.group({
        phone: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]]
      }),
      city: ['', Validators.required]
    });
  }

  get name() {
    return this.form.get('name');
  }

  get phone() {
    return this.form.get('contact.phone');
  }

  get email() {
    return this.form.get('contact.email');
  }

  get city() {
    return this.form.get('city');
  }

  onSave() {
    // Forcing the form into error state
    // let savedSuccessfully = this.customersService.saveCustomer(this.form.value);
    // if(!savedSuccessfully) {
    this.form.setErrors({
      invalidCustomer: true
    });
    // }
    console.log(this.form);
  }
}
