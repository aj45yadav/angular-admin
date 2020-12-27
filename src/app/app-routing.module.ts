import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ForgotPswComponent } from './auth/forgot-psw/forgot-psw.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminGuardGuard } from './guards/admin-guard.guard'
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { UserComponent } from './user/user.component';
import { UserGuardGuard } from './guards/user-guard.guard';
import { DemoComponentComponent } from './admin/demo-component/demo-component.component';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: {title: 'Login'},
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {title: 'register'}
  },
  {
    path: 'forgot-password',
    component: ForgotPswComponent,
    data: {title: 'forgot-password'},
  },
  // add admin component inside the admin layouts
  {
    path: '',
    component: AdminLayoutComponent, children: [
      {
        path: 'admin',
        children: [
          {
            path: 'dashboard',
            component: AdminComponent,
            data: {title: 'Dashboard'},
            canActivate: [AdminGuardGuard]
          },
          {
            path: 'demo-component',
            component: DemoComponentComponent,
            data: {title: 'Demo-Component'},
            canActivate: [AdminGuardGuard]
          }
        ]
      }
    ]
  },
  // add public view or user view inside user's layout
  {
    path: '',
    component: UserLayoutComponent, children: [
      {
        path: 'user',
        children: [
          {
            path: 'user-view',
            component: UserComponent,
            data: {title: 'User-view'},
            canActivate: [UserGuardGuard]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
