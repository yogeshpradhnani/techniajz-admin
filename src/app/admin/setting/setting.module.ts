import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';  
import { HttpClientModule } from '@angular/common/http';
import { SettingComponent } from './setting.component';
import { SettingUpdateComponent } from './setting-update/setting-update.component';
import { SettingRoutingModule } from './setting-routing.module';


@NgModule({
  declarations: [
    SettingComponent,
    SettingUpdateComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    MatIconModule,
    SharedModule,
    MatCardModule,
    ReactiveFormsModule, 
    NgSelectModule,
    HttpClientModule
  ]
})
export class SettingModule { }
