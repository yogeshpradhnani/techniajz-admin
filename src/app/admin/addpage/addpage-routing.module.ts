import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpageComponent } from './addpage.component';
import { AddpageListComponent } from './addpage-list/addpage-list.component';

const routes: Routes = [
  {  
     path: '',
     component: AddpageComponent,
     data: {
       breadcrumb: "Addpage"
     },
     children: [
       {
         path: 'add',
         component: AddpageListComponent,
         data: {
           title: "Addpage List",
         }
       },
       {
          path: "add/:id",
          component: AddpageListComponent,
          data: {
            title: "Add Team",
            breadcrumb: "Add Team",
          },
        },
        
     ]
   }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddpageRoutingModule { }
