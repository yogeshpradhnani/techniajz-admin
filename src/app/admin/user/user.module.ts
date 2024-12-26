import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';  
import { AddEditUserComponent } from './user-list/add-edit-user/add-edit-user.component';
import { userRequest } from './user-request/user-list.component';


@NgModule({
  declarations: [
    UserComponent,
    UserListComponent,
    AddEditUserComponent,
    userRequest
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatIconModule,
    SharedModule,
    MatCardModule,
    ReactiveFormsModule, 
    NgSelectModule,
]})
export class UserModule { }
