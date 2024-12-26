import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from './teams.component';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { TeamsRoutingModule } from './teams-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { NgbNavModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatInputModule } from '@angular/material/input';
import { NgSelectModule } from '@ng-select/ng-select';
import { AddEditTeamComponent } from './teams-list/add-edit-team/add-edit-team.component';
// import { EmployeeDetailComponent } from './teams-list/employee-detail/employee-detail.component';
// import { AttendanceModule } from '../attendance/attendance.module';
// import { SalaryModule } from '../salary/salary.module';
// import { LeaveModule } from '../leave/leave.module';
import { EditorInterigationComponent } from './editor-interigation/editor-interigation.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  declarations: [
    TeamsListComponent,
    TeamsComponent,
    AddEditTeamComponent,
    // EmployeeDetailComponent,
    EditorInterigationComponent,
  ],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    SharedModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatInputModule,
    NgSelectModule,
    NgbNavModule,
    // AttendanceModule,
    // SalaryModule,
    // LeaveModule,
    CKEditorModule
  ]
})
export class TeamsModule { }