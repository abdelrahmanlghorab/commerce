import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MustMatch } from './must-match.validator';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formData: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) {
    this.formData = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  submitForm() {
    this.submitted = true;
    if (this.formData.valid) {
      console.log(this.formData.value);
    }
  }

  get f() { 
    return this.formData.controls;
  }
}
