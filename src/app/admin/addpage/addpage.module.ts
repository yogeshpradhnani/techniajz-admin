import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';  
import { HttpClientModule } from '@angular/common/http';
import { AddpageComponent } from './addpage.component';
import { AddpageListComponent } from './addpage-list/addpage-list.component';
import { AddpageRoutingModule } from './addpage-routing.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AddpageComponent,
    AddpageListComponent,
  ],
  imports: [
    CommonModule,
    CKEditorModule,
    AddpageRoutingModule,
    MatIconModule,
    SharedModule,
    MatCardModule,
    ReactiveFormsModule, 
    NgSelectModule,
    HttpClientModule,
    FormsModule
  ]
})

export class AddpageModule { }