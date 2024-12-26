import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';  
import { AuthenticationComponent } from './authentication.component';
import { RegistrationComponent } from './registration/registration.component';




@NgModule({
  declarations: [
    AuthenticationComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MatIconModule,
    SharedModule,
    MatCardModule,
    ReactiveFormsModule, 
    NgSelectModule,
]})
export class AuthenticationModule { }
