import { Injectable } from '@angular/core';
import { Data, Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import * as moment from 'moment-timezone';
import Swal from 'sweetalert2';
import { ApiResponse } from './api-response';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})

export class SharedService {
  activatedRouteData: BehaviorSubject<Data> = new BehaviorSubject<Data>({});
  errorIndicator: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  headerTitle: BehaviorSubject<string> = new BehaviorSubject('');
  loadingIndicator: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private resizeSubject = new Subject<number>();
  resize$ = this.resizeSubject.asObservable();
  date:any= new Date();
  maxDate: any = `${this.date.getFullYear()}-${this.date.getMonth() + 1 <=9 ?"0" +(this.date.getMonth() + 1): (this.date.getMonth() + 1) }-${this.date.getDate() <=9 ?"0" + this.date.getDate() : this.date.getDate()}`
  constructor(
    private http: HttpClient,
    private router: Router,
    private location: Location,
    private titleService: Title) {
  }

  get routeData() {
    return this.activatedRouteData.getValue();
  }

  set routeData(value: Data) {
    this.activatedRouteData.next(value);
  }

  get isError() {
    return this.errorIndicator.getValue();
  }

  set isError(value: boolean) {
    this.errorIndicator.next(value);
  }

  get   () {
    return this.loadingIndicator.getValue();
  }

  set isLoading(value: boolean) {
    this.loadingIndicator.next(value);
  }

  set title(value: string) {
    this.headerTitle.next(value);
  }

  get title() {
    return this.headerTitle.getValue();
  }

  changeTitle(newTitle: string){
    this.titleService.setTitle(newTitle);
  }

  displayServerMessage(message: string, status: string) {
    Swal.fire({
      title: status == 'success' ? 'Success' : 'Error',
      text: message,
      icon: status == 'success' ? 'success' : 'error',
      confirmButtonColor: 'var(--theme-default)'
    });
  }

  formatTimestampInSeconds(timestampInSeconds: number): string {
    const timestampInMilliseconds = timestampInSeconds * 1000;
    const estTime = moment(timestampInMilliseconds).tz('America/Toronto');
    const formattedMomentDate = estTime.format('MMM D, YYYY (hh:mma)');
    return formattedMomentDate;
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }
  
  getDefaultGameId(gameList: any): number | null {
    const defaultGame = gameList.find((row: { isDefault: boolean }) => row.isDefault);
    return defaultGame ? defaultGame.gameId : 1;

  }

  authDisplayServerMessage(status: boolean, text: string): Promise<boolean> {
    return Swal.fire({
      icon: status == true ? 'success' : 'error',
      title: status == true ? 'Success' : 'Error',
      text: text,
      confirmButtonColor: 'var(--theme-default)',
    }).then((result) => {
      return true;
    })
  }

  confirmBox(title: string, text: string): Promise<boolean> {
    return Swal.fire({
      icon: 'warning',
      title: title,
      text: text,
      showCancelButton: true,
      confirmButtonColor: 'var(--theme-default)',
      customClass: {
        cancelButton: 'order-1',
        confirmButton: 'order-2'
      }
    }).then((result) => {
      return (result.isConfirmed) ? true : false;
    })
  }

  goBack() {
    this.location.back();
  }

  close() {
    window.close();
  }
  
  getRequest(url: string, params?: any ,header?:any) {
    return this.http.get<ApiResponse>(url, { params: params });
  }

  putRequest(url: string, body: any) {
    return this.http.put<ApiResponse>(url, body);
  }
  postRequest(url: string, body?: object, params?: any) {
    return this.http.post<ApiResponse>(url, body, { params: params });
  }

  logOut() {
    AuthService.logout();
    this.router.navigate(['/user-login'])
  }
}
