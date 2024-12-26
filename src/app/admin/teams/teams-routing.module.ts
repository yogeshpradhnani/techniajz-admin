import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TeamsComponent } from "./teams.component";
import { TeamsListComponent } from "./teams-list/teams-list.component";
import { AddEditTeamComponent } from "./teams-list/add-edit-team/add-edit-team.component";
// import { EmployeeDetailComponent } from "./teams-list/employee-detail/employee-detail.component";
import { EditorInterigationComponent } from "./editor-interigation/editor-interigation.component";

const routes: Routes = [
  {
    path: "",
    component: TeamsComponent,
    data: {
      breadcrumb: "Teams",
    },
    children: [
      {
        path: "list",
        component: TeamsListComponent,
        data: {
          title: "Team Board",
        },
      },
      {
        path: "add-teams",
        component: AddEditTeamComponent,
        data: {
          title: "Add Team",
          breadcrumb: "Add Team",
        },
      },
      {
        path: "add-teams1",
        component: EditorInterigationComponent,
        data: {
          title: "Add Team",
          breadcrumb: "Add Team",
        },
      },
      {
        path: "add-teams1/:id",
        component: EditorInterigationComponent,
        data: {
          title: "Add Team",
          breadcrumb: "Add Team",
        },
      },
      {
        path: "edit-teams/:id",
        component: AddEditTeamComponent,
        data: {
          title: "Edit Team",
          breadcrumb: "Edit Team",
        },
      },
      // {
      //   path: "details/:id",
      //   component: EmployeeDetailComponent,
      //   data: {
      //     title: "Employee Detail",
      //     breadcrumb: "Employee Detail",
      //   },
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamsRoutingModule {}
