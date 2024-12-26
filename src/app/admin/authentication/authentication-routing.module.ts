import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { AuthenticationComponent } from './authentication.component';

const routes: Routes = [
  {  
     path: '',
     component: AuthenticationComponent,
     data: {
       breadcrumb: "User"
     },
     children: [
       {
         path: 'registration',
         component: RegistrationComponent,
         data: {
           title: "Add Property",
         }
       },
       
       
     ]
   }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
