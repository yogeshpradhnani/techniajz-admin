import { Component, OnInit } from "@angular/core";
import { DashboardService } from "../dashboard.service";
import { SharedService } from "../../../shared/shared.service";
import { DecimalPipe, DatePipe } from "@angular/common";
import { TableService } from "src/app/shared/services/table/table.service";
import { NavigationExtras, Router } from "@angular/router";

@Component({
  selector: "app-dashboard-card",
  templateUrl: "./dashboard-card.component.html",
  styleUrls: ["./dashboard-card.component.scss"],
  providers: [TableService, DecimalPipe, DatePipe],
})
export class DashboardCardComponent implements OnInit {
  LeadData: any = [];
  upcomingTaskList: any = [];
  eventDate: Date;
  eventDay: string = "";
  eventFormateDate: String;
  constructor(private sharedService: SharedService, private dashboardService: DashboardService, public service: TableService, private datePipe: DatePipe, private router: Router) {}

  ngOnInit() {
  }

  get isLoading(): boolean {
    return this.sharedService.isLoading;
  }

  formatDate(dateString: string): string {
    const date = this.datePipe.transform(dateString, "dd/MM/yyyy") || "";
    return date;
  }

  redirectToLead(data: any): void {
    const navigationExtras: NavigationExtras = {
      state: {
        active: data,
      },
    };
    this.router.navigate([`admin/lead/list`], navigationExtras).catch((e) => {
      return window.alert("Technical Error Occurred.");
    });
  }

  redirectToDetails(route : any): void {
    try {
      const url = `admin/lead/lead-detail/${route}`;
      window.open(url, '_blank');
    } catch (e) {
      window.alert("Technical Error Occurred.");
    }
  }
}
