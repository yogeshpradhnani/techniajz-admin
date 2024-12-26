import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService implements HttpInterceptor {

  constructor(private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwtToken = localStorage.getItem('jwt') || '';
    
    req = req.clone({
      url:  req.url,
      setHeaders: {
        "authorization": jwtToken,
        "accept-language": "en"
      }
    });
    
    return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        if (event.body.admin && event.body.admin.lastUpdatedAt) {
          localStorage.setItem('lastUpdatedAt', event.body.admin.lastUpdatedAt);
        }
        switch (event.body.errorCode) {
          case 0:
            return event;
          case 1: 
            return this.router
              .navigate(['/user-login'])
              .catch(() => window.alert('Technical Error Occurred'));
          default:
            return event;
        }
      }
      return event;
    }));
  }
}
