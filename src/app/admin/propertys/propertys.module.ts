import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';  
import { HttpClientModule } from '@angular/common/http';
import { PropertysRoutingModule } from './propertys-routing.module';
import { PropertysComponent } from './propertys.component';
import { PropertysListComponent } from './propertys-list/propertys-list.component';


@NgModule({
  declarations: [
    PropertysComponent,
    PropertysListComponent,
  ],
  imports: [
    CommonModule,
    PropertysRoutingModule,
    MatIconModule,
    SharedModule,
    MatCardModule,
    ReactiveFormsModule, 
    NgSelectModule,
    HttpClientModule
  ]
})
export class PropertysModule { }
