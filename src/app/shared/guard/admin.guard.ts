
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard {
   public url: any;
  constructor(public router: Router) { }
  ngOnInit() {
    this.url = this.router.url;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let user = localStorage.getItem('jwt') || '';
    if (!user || user === '') {
      this.router.navigate(['/user-login']);
      return true;
    }
    return true;
  }
}
