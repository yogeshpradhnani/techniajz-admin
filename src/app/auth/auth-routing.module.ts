import { NgModule, importProvidersFrom } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import {ForgetPasswordComponent} from './forget-password/forget-password.component'
import {VerifyOtpComponent} from './verify-otp/verify-otp.component';
import {ConfirmPasswordComponent} from './confirm-password/confirm-password.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'user-login',
        component: LoginComponent
      },
      {
        path: 'forgot-password',
        component: ForgetPasswordComponent
      },
      {
        path: 'verify-otp',
        component: VerifyOtpComponent
      },
      {
        path: 'confirm-password',
        component: ConfirmPasswordComponent
      },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
