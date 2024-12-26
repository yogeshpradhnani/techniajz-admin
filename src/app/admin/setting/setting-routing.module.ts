import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingComponent } from './setting.component';
import { SettingUpdateComponent } from './setting-update/setting-update.component';

const routes: Routes = [
  {  
     path: '',
     component: SettingComponent,
     data: {
       breadcrumb: "setting "
     },
     children: [
       {
         path: 'update',
         component: SettingUpdateComponent,
         data: {
           title: "setting update",
         }
       },
       
       
     ]
   }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
