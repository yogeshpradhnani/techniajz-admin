import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertysComponent } from './propertys.component';
import { PropertysListComponent } from './propertys-list/propertys-list.component';

const routes: Routes = [
  {  
     path: '',
     component: PropertysComponent,
     data: {
       breadcrumb: "Userpanel"
     },
     children: [
       {
         path: 'propertysList',
         component: PropertysListComponent,
         data: {
           title: "propertysList List",
         }
       },
        
     ]
   }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertysRoutingModule { }
