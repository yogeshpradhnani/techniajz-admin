import { Injectable } from '@angular/core';
import { ApiResponse } from '../../shared/api-response';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SharedService } from '../../shared/shared.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class UserProfileService {
  teamsUrl = environment.adminUrl+'/team';
  constructor(public sharedService: SharedService,
    private http: HttpClient
  ) { };
  getUserDetail(): Observable<ApiResponse>{
    return this.sharedService.getRequest(this.teamsUrl + '/profile')
  }

}

