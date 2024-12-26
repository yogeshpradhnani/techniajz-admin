import { Injectable } from '@angular/core';
import { ApiResponse } from '../../shared/api-response';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SharedService } from '../../shared/shared.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class AddPropertyService {
  submitProperty(formData: FormData) {
    throw new Error('Method not implemented.');
  }
  userUrl = environment.adminUrl+'/user';
  constructor(public sharedService: SharedService,
    private http: HttpClient
  ) { };
 
  getUsersList(query:object): Observable<ApiResponse> {
    return  this.sharedService.getRequest(this.userUrl + '/getAll',query);
  }
}

