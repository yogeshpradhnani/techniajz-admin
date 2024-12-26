import { Injectable } from '@angular/core';
import { ApiResponse } from '../../shared/api-response';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SharedService } from '../../shared/shared.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddpageService {
  constructor(public sharedService: SharedService,
    private http: HttpClient
  ) { };
  userUrl = environment.adminUrl+'/user';
  formData(query:object): Observable<ApiResponse> {
    return  this.sharedService.postRequest(this.userUrl + '/addpage',query);
  }

}


