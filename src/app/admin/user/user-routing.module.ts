import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from "./user.component";
import { UserListComponent } from './user-list/user-list.component';
import { AddEditUserComponent } from './user-list/add-edit-user/add-edit-user.component';
import { userRequest } from './user-request/user-list.component';

const routes: Routes = [
  {  
     path: '',
     component: UserComponent,
     data: {
       breadcrumb: "User"
     },
     children: [
       {
         path: 'list',
         component: UserListComponent,
         data: {
           title: "User List",
         }
       },
       {
         path: 'add-users',
         component: AddEditUserComponent,
         data: {
           title: "Add User",
         }},
         {
          path: 'user-list',
          component: userRequest,
          data: {
            title: "User List",
          }
        },
   
      
     ]
   }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
