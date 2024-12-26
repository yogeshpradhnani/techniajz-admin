import { Injectable } from '@angular/core';
import { ApiResponse } from '../../shared/api-response';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SharedService } from '../../shared/shared.service';
import { HttpClient,HttpParams  } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class ChangepasswordService {
  userUrl = environment.adminUrl+'/user';
  constructor(public sharedService: SharedService,
    private http: HttpClient 
  ) { };
 
  getUsersList(query:object): Observable<ApiResponse> {
    return  this.sharedService.getRequest(this.userUrl + '/getAll',query);
  }


  private url = "http://localhost:3001/user/addUser";

  sendUserData(userData: object): Observable<any> {
    console.log("userData = ",userData)
    return this.http.post(this.url, userData);
  }


  DeleteUser(Id:string): Observable<any> {

      const Params = new HttpParams().set("userId" , "658d06dcac358e351126214e")
      console.log("params")
      return this.http.get(this.userUrl+ '/deleteUser',{ params: Params });
  }


}

