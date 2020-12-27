import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from '../../services/mustmatch'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm;
  mailFormat = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern(this.mailFormat)
      ])],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', Validators.required]
    }, {
      validators: MustMatch('password', 'confirmPassword')
    });
  }
  get f() { return this.registerForm.controls; }
  passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 5) {
      return { password: true };
    }
  }
  validateEmail(formcontrol) {
    const mailFormat = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (formcontrol.value === '') {
      alert('Please enter your Email or Phone Number');
    } else if (!mailFormat.test(formcontrol.value)) {
      alert('Email Address / Phone number is not valid, Please provide a valid Email or phone number');
      return false;
    } else {
      alert('Success');
    }
  }
  register(data) {
    const request = {
      email: data.email,
      password: data.password
    };
    console.log(request);
  }
}
