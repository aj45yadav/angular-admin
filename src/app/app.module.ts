import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Materialmodule } from './material-module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPswComponent } from './auth/forgot-psw/forgot-psw.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared-component/header/header.component';
import { DemoComponentComponent } from './admin/demo-component/demo-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    UserLayoutComponent,
    UserComponent,
    AdminComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPswComponent,
    HeaderComponent,
    DemoComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Materialmodule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
