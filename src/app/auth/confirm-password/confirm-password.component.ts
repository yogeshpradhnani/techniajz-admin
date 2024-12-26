import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../../shared/shared.service'
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrl: './confirm-password.component.scss'
})

export class ConfirmPasswordComponent {
  public show: boolean = false;
  public isShowConfirmPassword: boolean = false;
  confirmPasswordForm: FormGroup;
  errorMessage: string;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private sharedService: SharedService
  ) { }
  
  ngOnInit() {
    const payload = history.state;
    console.log(payload)
    const resetToken = payload?.resetToken;
    const email = payload?.email
    this.confirmPasswordForm = this.formBuilder.group({
      email: [email || null],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      resetToken: [resetToken || null]
    }, { validators: this.passwordMatchValidator });
  }

  showPassword() {
    this.show = !this.show;
  }

  showConfirmPassword() {
    this.isShowConfirmPassword = !this.isShowConfirmPassword;
  }

  passwordMatchValidator(control: FormGroup): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password?.value && confirmPassword?.value) {
      if (password.value !== confirmPassword.value) {
        return { passwordMismatch: true };
      } else {
        return null;
      }
    } return null;
  }

  get isLoading(): boolean {
    return this.sharedService.isLoading;
  }

  confirmPassword(): void {
    this.errorMessage = "";
    if (this.confirmPasswordForm.invalid) {
      this.sharedService.isError = true;
      this.errorMessage = 'Missing Required Fields.';
    } else {
      this.sharedService.isError = false;
      this.sharedService.isLoading = true;
      const Query : {email : any; password : string} = {
        email : this.confirmPasswordForm.value.email,
        password: this.confirmPasswordForm.value.confirmPassword
      }
      const confirmPassword = this.authService.confirmPassword(Query).subscribe(result => {
        if (result.success) {
          this.sharedService.authDisplayServerMessage( result.success,result.message).then((result) => {
            if (result) {
              this.router.navigate(['/user-login']).catch((e) => {
                return window.alert('Technical Error Occurred.')
              });
            }
          });
        } else {
          this.sharedService.isError = true;
          this.errorMessage = 'Invalid password.';
        }
      }, (error) => {
        this.errorMessage = error?.error?.message;
        this.sharedService.isError = true
      },
        () => this.sharedService.isLoading = false
      );
      setTimeout(() => this.cancelLoginRequest(confirmPassword), 5000);
    }
  }

  cancelLoginRequest(confirmPassword: Subscription): void {
    confirmPassword.unsubscribe();
    this.sharedService.isError = true;
    this.sharedService.isLoading = false;
    this.errorMessage = this.errorMessage ? this.errorMessage : 'Request Timeout';
  }
}