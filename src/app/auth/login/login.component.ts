import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  mailFormat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/;
  users = new Users();
  constructor(private formBuilder: FormBuilder, public authService: AuthService, public router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern(this.mailFormat)
      ])],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }
  get f() { return this.loginForm.controls; }
  passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 5) {
      return { password: true };
    }
  }

  login(data) {
    const request = {
      email: data.email,
      password: data.password
    };
    console.log(request);
    this.router.navigate(['/admin/dashboard'])
    // this.authService.loginService(request).subscribe(
    //   (res: any) => {
    //     this.users = res.data;
    //     localStorage.setItem('loggedUsers', JSON.stringify(this.users))
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // )

  }
}

export class Users {
  id: number;
  email: string;
  access_token: string;
  role: string;
}
