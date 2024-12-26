import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { ApiResponse } from "../shared/api-response";
import { Observable } from "rxjs";
import { UserLogin } from "./login/login";
import { SharedService } from "../shared/shared.service";
import { UserForgotPassword } from "./forget-password/forget-password";
import { Router } from "@angular/router";
@Injectable({
  providedIn: "root",
})
export class AuthService {
  changePassword(oldPassword: any, newPassword: any) {
    throw new Error('Method not implemented.');
  }
  redirectUrl: string;
  authUrl = environment.adminUrl + "/auth";
  constructor(public sharedService: SharedService) {}

  static set adminUserProfile(value: any) {
    if (value.user) {
      localStorage.setItem("userId", value.user._id);
      localStorage.setItem("userEmail", value.user.email);
      localStorage.setItem("userName", value.user.name);
      localStorage.setItem("jwt", value.jwt);
      localStorage.setItem("role", value.user.designationId.name);
      localStorage.setItem(
        "permission",
        JSON.stringify({
          attandance: true,
          buyProperty: true,
          cheque: true,
          dailyReport: true,
          expenses: true,
          holiday: true,
          leave: true,
          location: true,
          project: true,
          salary: true,
          sales: true,
          team: true,
          typesOfProperty: true,
          vendoor: true,
        })
      );
      localStorage.setItem("profileImage", value.user.profile_pitcture);
    }
  }

  static logout(): void {
    localStorage.clear();
  }

  login(form: UserLogin): Observable<ApiResponse> {
    return this.sharedService.postRequest(this.authUrl + "/log-in-web", form);
  }

  forgotPassword(bodyData: UserForgotPassword): Observable<ApiResponse> {
    return this.sharedService.postRequest(this.authUrl + "/forgot-password", bodyData);
  }

  forgotPasswordVerify(bodyData: object): Observable<ApiResponse> {
    return this.sharedService.postRequest(this.authUrl + "/forgot-password-verify", bodyData);
  }

  confirmPassword(bodyData: object): Observable<ApiResponse> {
    return this.sharedService.postRequest(this.authUrl + "/reset-password", bodyData);
  }

  resendOtp(bodyData: object): Observable<ApiResponse> {
    return this.sharedService.postRequest(this.authUrl + "/resend-otp", bodyData);
  }
}
