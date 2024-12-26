import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgbPaginationModule, NgbTypeaheadModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';



@NgModule({
  declarations: [
    UserProfileComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    SharedModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatInputModule,
    NgSelectModule,
  ],
  
})
export class UserProfileModule { }
