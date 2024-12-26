import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,NavigationExtras } from '@angular/router';
import { SharedService } from '../../shared/shared.service'
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {
  public show: boolean = false;
  forgotPasswordForm: FormGroup;
  errorMessage: string;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private sharedService: SharedService
    ) {}


  ngOnInit() {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
    });
  }
  
  get isLoading(): boolean {
    return this.sharedService.isLoading;
  }

  forgotPassword(): void {
    this.errorMessage = "";
    if (this.forgotPasswordForm.invalid) {
      this.sharedService.isError = true;
      this.errorMessage = 'Missing Required Fields.';
    } else {
      this.sharedService.isError = false;
      this.sharedService.isLoading = true;
      const forgotPassword = this.authService.forgotPassword(this.forgotPasswordForm.value).subscribe(result => {
          if (result.data && result.success) {
            const navigationExtras: NavigationExtras = {
              state: {
                ...this.forgotPasswordForm.value,
                resetToken : result.data?.token
              }
            };
            this.sharedService.authDisplayServerMessage( result.success,result.message).then((result) => {
              if (result) {
                this.router.navigate(['/verify-otp'],navigationExtras).catch((e) => {
                  return window.alert('Technical Error Occurred.')
                });
              }
            });
          } else {
            this.sharedService.isError = true;
            this.errorMessage = 'Invalid Email.';
          }
        }, (error) => {
          this.errorMessage = error?.error?.message;
          this.sharedService.isError = true
        } ,
         () => this.sharedService.isLoading = false
        );
      setTimeout(() => this.cancelLoginRequest(forgotPassword), 5000);
    }
  }

  cancelLoginRequest(forgotPassword: Subscription): void {
    forgotPassword.unsubscribe();
    this.sharedService.isError = true;
    this.sharedService.isLoading = false;
    this.errorMessage = this.errorMessage ? this.errorMessage :'Request Timeout';
  }
}
