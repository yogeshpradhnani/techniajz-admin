import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../../shared/api-response'
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  dashboardUrl = environment.adminUrl + '/Lead';
  constructor(private http: HttpClient) { };

}

