import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { SharedService } from '../../shared/shared.service'
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss']
})
export class VerifyOtpComponent {
  VerifyOtpForm: FormGroup;
  errorMessage: string;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    const payload = history.state;
    const email = payload?.email;
    const resetToken = payload?.resetToken;
    this.VerifyOtpForm = this.formBuilder.group({
      email: [email || null],
      resetToken: [resetToken || null],
      otp: [null, [Validators.pattern('^0*[0-9]{1,4}$'), Validators.required]],
    });
  }

  get isLoading(): boolean {
    return this.sharedService.isLoading;
  }

  verifyUser(): void {
    this.errorMessage = "";
    if (this.VerifyOtpForm.invalid) {
      this.sharedService.isError = true;
      this.errorMessage = 'Missing Required Fields.';
    } else {
      this.sharedService.isError = false;
      this.sharedService.isLoading = true;
      const VerifyOtp = this.authService.forgotPasswordVerify(this.VerifyOtpForm.value).subscribe(result => {
        if (result.success) {
          const navigationExtras: NavigationExtras = {
            state: {
              email: this.VerifyOtpForm.value.email,
              resetToken: result.data?.token
            }
          };
          this.sharedService.authDisplayServerMessage(result.success, result.message).then((result) => {
            if (result) {
              this.router.navigate(['confirm-password'], navigationExtras).catch((e) => {
                return window.alert('Technical Error Occurred.');
              });
            }
          });
        } else {
          this.sharedService.isError = true;
          this.errorMessage = 'Invalid OTP';
        }
      }, (error) => {
        this.errorMessage = error?.error?.message;
        this.sharedService.isError = true
      },
        () => this.sharedService.isLoading = false
      );
      setTimeout(() => this.cancelLoginRequest(VerifyOtp), 5000);
    }
  }

  cancelLoginRequest(VerifyOtp: Subscription): void {
    VerifyOtp.unsubscribe();
    this.sharedService.isError = true;
    this.sharedService.isLoading = false;
    this.errorMessage = this.errorMessage ? this.errorMessage : 'Request Timeout';
  }

  resendOtp(): void {
    this.errorMessage = "";
    this.sharedService.isError = false;
    this.sharedService.isLoading = true;
    let email = this.VerifyOtpForm?.get('email')?.value;

    const bodyData = {
      email: email
    }
    if (email) {
      this.authService.forgotPassword(bodyData).subscribe(result => {
        if (result.success) {
          const resetToken = result && result.data && result.data.token ? result.data.token : "";
          this.VerifyOtpForm?.get('resetToken')?.setValue(resetToken);
          this.sharedService.authDisplayServerMessage(result.success, result.message).then((result) => { });
        } else {
          this.sharedService.isError = true;
          this.errorMessage = 'Invalid Access';
        }
      }, (error) => {
        this.errorMessage = error?.error?.message;
        this.sharedService.isError = true
      },
        () => this.sharedService.isLoading = false
      );
    }else{
      this.sharedService.isLoading = false;
    }
  }

}