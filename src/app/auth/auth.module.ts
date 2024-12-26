import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component'
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms'; 
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import {VerifyOtpComponent} from './verify-otp/verify-otp.component';
import {ConfirmPasswordComponent} from './confirm-password/confirm-password.component';
@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    ForgetPasswordComponent,
    VerifyOtpComponent,
    ConfirmPasswordComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    
   ]
})
export class AuthModule {}