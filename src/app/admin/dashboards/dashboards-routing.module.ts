import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { DashboardsComponent } from "./dashboards.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardsComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardCardComponent,
        data: {
          title: 'Administrator Dashboard',
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardsRoutingModule { }
