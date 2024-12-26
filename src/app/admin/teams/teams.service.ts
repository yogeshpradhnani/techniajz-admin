import { Injectable } from "@angular/core";
import { ApiResponse } from "../../shared/api-response";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { SharedService } from "../../shared/shared.service";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class TeamsService {
  teamsUrl = environment.adminUrl + "/Employees";
  constructor(public sharedService: SharedService, private http: HttpClient) {}

  getTeamsList(query: object): Observable<ApiResponse> {
    return this.sharedService.getRequest(this.teamsUrl + "/allEmployee", query);
  }

  updateTeamStatus(queryData: any): Observable<ApiResponse> {
    const teamId = queryData?.teamId;
    return this.sharedService.postRequest(this.teamsUrl + "/employeeStatus/" + teamId);
  }

  deleteEmployee(id: string): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.teamsUrl + "/deleteEmployee/" + id);
  }

  getEmployeeDetail(id: any): Observable<ApiResponse> {
    return this.sharedService.getRequest(this.teamsUrl + "/employeeDetails/" + id);
  }

  addEmployee(payload: any): Observable<ApiResponse> {
    return this.sharedService.postRequest(this.teamsUrl + "/addEmployee", payload);
  }

  editEmployee(payload: any, id: any): Observable<ApiResponse> {
    return this.sharedService.postRequest(this.teamsUrl + "/editEmployee/" + id, payload);
  }

  getPermissionsList(id: string): Observable<ApiResponse> {
    return this.sharedService.getRequest(environment.adminUrl + "/PermissionModule/fetchEmployeePermission/" + id);
  }

  updateEmployeePermission(body: any, id: any): Observable<ApiResponse> {
    return this.sharedService.putRequest(this.teamsUrl + "/updatePermission/" + id, body);
  }

  getAssignedProjects(id: string): Observable<ApiResponse> {
    return this.sharedService.getRequest(environment.adminUrl + "/project/projectAssignedToEmployee/" + id);
  }

  getProjectsList(): Observable<ApiResponse> {
    return this.sharedService.getRequest(environment.adminUrl + "/Lead/projectList");
  }

  assignProjectToEmployee(query: any): Observable<ApiResponse> {
    return this.sharedService.postRequest(environment.adminUrl + "/project/assignProject", query);
  }

  deleteAssignedProject(id: string): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(environment.adminUrl + "/project/deleteAssignedEmployee/" + id);
  }

  getEmployeeActivity(payload: any): Observable<ApiResponse> {
    return this.sharedService.getRequest(this.teamsUrl + "/TimelineActivity", payload);
  }

  getLeadSummary(payload: any): Observable<ApiResponse> {
    return this.sharedService.getRequest(environment.adminUrl + "/Lead/summeryReport", payload);
  }

  getLeaveHistory(params: any): Observable<ApiResponse> {
    return this.sharedService.getRequest(this.teamsUrl + "/leaveList", params);
  }

  getSalaryHistory(params: any): Observable<ApiResponse> {
    return this.sharedService.getRequest(environment.adminUrl + "/salary/salaryList", params);
  }

  getDownloadData(query: any): Observable<Blob> {
    return this.http.get(environment.adminUrl + "/salary/salarySlip", { params: query, responseType: "blob" });
  }

  getAllDesignation(): Observable<ApiResponse> {
    return this.sharedService.getRequest(environment.adminUrl + "/Designation/designationList");
  }

  storeCode(payload: any): Observable<ApiResponse> {
    return this.sharedService.postRequest(environment.adminUrl + "/Employees/storeCode", payload);
  }

  getCode(codeId: any): Observable<ApiResponse> {
    return this.sharedService.getRequest(environment.adminUrl + "/Employees/getCode/" + codeId);
  }
}
