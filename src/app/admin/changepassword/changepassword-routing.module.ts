import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangepasswordComponent } from './changepassword.component';
import { ChangeComponent } from './change/change.component';

const routes: Routes = [
  {  
     path: '',
     component: ChangepasswordComponent,
     data: {
       breadcrumb: "Changepassword"
     },
     children: [
       {
         path: 'change',
         component: ChangeComponent,
         data: {
           title: "Changepassword List",
         }
       },
        
     ]
   }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangepasswordRoutingModule { }
