import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-final',
  templateUrl: './register-final.component.html',
  styleUrls: ['./register-final.component.scss']
})
export class RegisterFinalComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      country: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      gender: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)]]
    }, {validator: this.comparePassword});

    // update form state
    this.registerForm.patchValue({
      email: 'info@example.com'
    });
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    console.log(this.registerForm);
  }


  // tslint:disable-next-line:typedef
  comparePassword(c: AbstractControl) {
    const v = c.value;
    return (v.password === v.confirmPassword) ? null : {
      passwordnotmatch: true
    };
  }

}
