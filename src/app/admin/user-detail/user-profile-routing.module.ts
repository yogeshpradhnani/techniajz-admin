import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AddEditTeamComponent } from '../teams/teams-list/add-edit-team/add-edit-team.component';

const routes: Routes = [
   {
    path: '',
    component: UserProfileComponent,
    children: [
      {
        path: '',
        component: UserDetailComponent,
        data: {
          title: "User Profile",
        }
      },
      {
        path: 'edit-profile/:id',
        component: AddEditTeamComponent,
        data: {
          title: "Edit Profile",
          breadcrumb: "Edit Profile",
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
