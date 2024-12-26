import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';  
import { HttpClientModule } from '@angular/common/http';
import { ChangeComponent } from './change/change.component';
import { ChangepasswordComponent } from './changepassword.component';
import { ChangepasswordRoutingModule } from './changepassword-routing.module';

@NgModule({
  declarations: [
    ChangeComponent,
    ChangepasswordComponent,
  ],
  imports: [
    CommonModule,
    ChangepasswordRoutingModule,
    MatIconModule,
    SharedModule,
    MatCardModule,
    ReactiveFormsModule, 
    NgSelectModule,
    HttpClientModule
  ]
})
export class ChangepasswordModule { }
