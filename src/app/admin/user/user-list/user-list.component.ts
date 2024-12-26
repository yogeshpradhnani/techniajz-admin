import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Observable, of} from 'rxjs';
import { TableService } from '../../../shared/services/table/table.service';
import { UserDB } from '../user';
import { UsersService } from '../user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'src/app/shared/shared.service';
import { globalConstatnt } from 'src/environments/environment';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  providers: [TableService, DecimalPipe],
})
export class UserListComponent {
  public tableData$: Observable<UserDB[]>;
  pageIndex: number = globalConstatnt.page;
  pageSize: number = globalConstatnt.pageSize;
  searchTerm : string = '';
  constructor(public service: TableService,
    private sharedService: SharedService,
    private usersService: UsersService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.getUsersList();
  }

  getUsersList(): void {
    this.sharedService.isLoading = true;
    const query: { page: number; limit: number; search?: any} = {
      page: this.pageIndex,
      limit: this.pageSize,
      search: this.searchTerm
    };
    this.usersService.getUsersList(query).subscribe(({ errorCode, message, data }) => {
      if (!data || typeof data.data == undefined) this.sharedService.displayServerMessage(`Error Occurred.`, "error");
      this.tableData$ = of(data?.employee);
    }, (error) => {
      if (error && error.error) {
        if (error.error.message === "Unauthorized access."){
          this.sharedService.logOut();
        }else{
          this.sharedService.displayServerMessage(error.error.message, "error")
        }
      }
      this.sharedService.isLoading = false;
    }, () => {
      this.sharedService.isLoading = false;
    });
  }
  confirmDeleteEmployee(id:string): void{

    alert(id);

  }
}
