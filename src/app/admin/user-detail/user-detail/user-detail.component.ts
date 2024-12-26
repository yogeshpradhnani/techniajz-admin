import { Component } from "@angular/core";
import { SharedService } from "src/app/shared/shared.service";
import { environment } from "src/environments/environment";
import { UserProfileService } from "../user-profile.service";

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrl: "./user-detail.component.scss",
})
export class UserDetailComponent {
  employeeId: string;
  employeeData: any;
  errorMessage: string;
  imageFullPath: string = environment.imageBaseUrl;
  public validate = false;
  isPermission: boolean = false;

  constructor(private sharedService: SharedService, private userService: UserProfileService) {}
  ngOnInit() {
    this.checkPermission();
    this.onEditMode();
    this.sharedService.changeTitle("Profile");
  }

  onRefreshData(): void {
    this.onEditMode();
  }

  convertTimeFormat(timeString: string | number): string {
    timeString = timeString?.toString();
    if (timeString === "0" || timeString == null) {
      return "";
    }
    const normalizedTimeString = timeString?.padStart(6, "0");
    const hourStr = normalizedTimeString.slice(0, 2);
    const minute = normalizedTimeString.slice(2, 4);
    const second = normalizedTimeString.slice(4, 6);
    const hour = parseInt(hourStr, 10);
    const period = hour < 12 || hour > 23 ? "AM" : "PM";
    const formattedHour = hour % 12 || 12;
    return `${formattedHour.toString().padStart(2, "0")}:${minute}:${second} ${period}`;
  }

  parseTimeHHMMSS(time: string | number): string {
    if (!time) {
      return "";
    }
    const timeString = time.toString().padStart(6, "0");
    const hours = parseInt(timeString.slice(0, 2), 10);
    const minutes = parseInt(timeString.slice(2, 4), 10);
    const seconds = parseInt(timeString.slice(4, 6), 10);

    return `${hours} Hours ${minutes} Minute`;
  }

  onEditMode(): void {
    const id = localStorage.getItem("userId");
    const Data = this.userService.getUserDetail().subscribe(
      (result) => {
        let info = result.data;
        if (result.data) {
          this.employeeId = info.id;
          this.employeeData = info;
          localStorage.setItem("permission", JSON.stringify(result.data.permission));
          localStorage.setItem("profileImage", result.data.profile_pitcture);
        }
      },
      (error) => {
        if (error.error.message === "Unauthorized access.") {
          this.sharedService.logOut();
        }
      }
    );
  }

  changeToCurrency(amount: any) {
    const transformAmount = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(amount);

    return transformAmount.toString();
  }

  checkPermission(): void {
    const permission = localStorage.getItem("permission");
    let Data: any = {};
    if (permission !== null) {
      Data = JSON.parse(permission);
      this.isPermission = Data.team;
    }
  }
}
