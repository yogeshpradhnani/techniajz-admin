import { Component, QueryList, ViewChildren, TemplateRef, ViewChild } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Observable, of } from 'rxjs';
import { TableService } from '../../../shared/services/table/table.service';
import { NgbdSortableHeader } from '../../../shared/directives/sortable.directive';
import { SharedService } from '../../../shared/shared.service'
import { TeamsService } from '../teams.service';
import { TeamsDB } from '../teams';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { globalConstatnt } from '../../../../environments/environment';
import { PAGE_ITEM, pageItem } from '../../../shared/admin-status';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrl: './teams-list.component.scss',
  providers: [TableService, DecimalPipe],
})
export class TeamsListComponent {
  @ViewChildren(NgbdSortableHeader) headers!: QueryList<NgbdSortableHeader>;
  @ViewChild('openmodal') openModalTemplateRef: TemplateRef<any>;
  public tableData$: Observable<TeamsDB[]>;
  public total$: Observable<number>;
  pageIndex: number = globalConstatnt.page;
  pageSize: number = globalConstatnt.pageSize;
  pageItemList: pageItem[];
  title: string = '';
  paginationDisabled: boolean = false;
  imageFullPath : string=environment.imageBaseUrl;
  searchTerm : string = '';
  constructor(public service: TableService,
    private sharedService: SharedService,
    private teamsService: TeamsService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.pageItemList = PAGE_ITEM;
    this.getTeamsList();
  }

  onRefreshData(): void {
    this.service.page = globalConstatnt.page;
    this.service.pageSize = globalConstatnt.pageSize;
    this.pageIndex = globalConstatnt.page;
    this.pageSize = globalConstatnt.pageSize;
    this.searchTerm = '';
    this.getTeamsList();
  }
  
  loadPage(page: any, pageSize: any) {
    this.pageSize = pageSize;
    this.pageIndex = page;
    this.getTeamsList();
  }
 
  getTeamsList(): void {
    this.sharedService.isLoading = true;
    this.paginationDisabled = false;
    const query: { page: number; limit: number; search?: any} = {
      page: this.pageIndex,
      limit: this.pageSize,
      search: this.searchTerm
    };
    this.teamsService.getTeamsList(query).subscribe(({ errorCode, message, data }) => {
      if (!data || typeof data.data == undefined) this.sharedService.displayServerMessage(`Technical Error Occurred.`, "error");
      this.tableData$ = of(data?.employee);
      this.total$ = of(data?.totalCount);
    }, (error) => {
      if (error && error.error) {
        if (error.error.message === "Unauthorized access."){
          this.sharedService.logOut();
        }else{
          this.sharedService.displayServerMessage(error.error.message, "error")
        }
      }
      this.sharedService.isLoading = false;
      this.paginationDisabled = false;
    }, () => {
      this.sharedService.isLoading = false;
      this.paginationDisabled = true;
    });
  }

  confirmStatusChange(status?: boolean, teamId?: number): void {
    if (status !== undefined && teamId !== undefined) {
      const statusMsg = status ? "Inactivate " : "Activate ";
      const title = 'Are you sure?';
      const text = `Do you really want to  ${statusMsg} this Employee?`;
      this.sharedService.confirmBox(title, text).then((result) => {
        const queryData: { status: boolean, teamId?: number; } = {
          status: status,
          teamId: teamId
        };
        if (result) {
          this.teamsService.updateTeamStatus(queryData).subscribe(response => {
            if (response && (response as any).success) {
              this.sharedService.displayServerMessage(response.message, "success");
              this.getTeamsList();
            }
          }, error => {
            if (error.error) this.sharedService.displayServerMessage(error.error.message, "error"),
              () => this.sharedService.isLoading = false
          });
        }
      });
    }
  }

  confirmDeleteEmployee(id : string): void {
    if (id!== undefined) {
      const title = 'Are you sure?';
      const text = `Do you really want to Delete this Employee?`;
      this.sharedService.confirmBox(title, text).then((result) => {
        if (result) {
          this.teamsService.deleteEmployee(id).subscribe(response => {
            if (response.success) {
              this.sharedService.displayServerMessage(response.message, "success");
              this.getTeamsList();
            }
          }, error => {
            if (error.error) this.sharedService.displayServerMessage(error.error.message, "error"),
              () => this.sharedService.isLoading = false
          });
        }
      });
    }
  }

  redirectToDetails(route : any): void {
    try {
      const url = `admin/team/details/${route}`;
      window.open(url, '_blank');
    } catch (e) {
      window.alert("Technical Error Occurred.");
    }
  }
}