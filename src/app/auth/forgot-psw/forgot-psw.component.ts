import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-psw',
  templateUrl: './forgot-psw.component.html',
  styleUrls: ['./forgot-psw.component.css']
})
export class ForgotPswComponent implements OnInit {
  mailFormat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/;
  forgotPsw;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.forgotPsw = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern(this.mailFormat)
      ])],
    },);
  }
  forgotPswSubmit(data) {
    const request = {
      email: data.email,
    };
    console.log(request);
  }
}
