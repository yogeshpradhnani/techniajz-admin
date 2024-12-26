import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './shared/component/layout/content/content.component';
import { dashData } from './shared/routes/routes';
import { fullRoutes } from './shared/routes/full-routes';
import { FullComponent } from './shared/component/layout/full/full.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminGuard } from './shared/guard/admin.guard';
import {AuthGuard} from "../app/auth/auth.guard"
import {ForgetPasswordComponent} from './auth/forget-password/forget-password.component';
import { VerifyOtpComponent } from './auth/verify-otp/verify-otp.component';
import {ConfirmPasswordComponent} from './auth/confirm-password/confirm-password.component';
import { userRequest } from './admin/user/user-request/user-list.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'user-login',
    component: LoginComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'forgot-password',
    component: ForgetPasswordComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'verify-otp',
    component: VerifyOtpComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'confirm-password',
    component: ConfirmPasswordComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: ContentComponent,
    canActivate: [AdminGuard],
    children: dashData

  },
  {
    path: '',
    component: FullComponent,
    children: fullRoutes,
  },
  {
    path: '',
    component: userRequest,
    canActivate: [AdminGuard],
    
  },
  {
    path: '**',
    redirectTo: '/error-page/error404',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
