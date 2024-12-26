import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { DashboardsRoutingModule } from './dashboards-routing.module';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { DashboardsComponent } from './dashboards.component'

@NgModule({
  declarations: [
    DashboardsComponent,
    DashboardCardComponent
],
  imports: [
    MatIconModule,
    CommonModule,
    DashboardsRoutingModule,
    SharedModule,
    MatCardModule,
  ]
})
export class DashboardsModule { }
