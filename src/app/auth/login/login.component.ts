import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../../shared/shared.service'
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public show: boolean = false;
  loginForm: FormGroup;
  errorMessage: string;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.checkNavigationAfterReload();
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required],
      deviceType: ['web'],
      deviceToken: [this.generateRandomNumber(6)]
    });
  }

  generateRandomNumber(length: number): string {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += Math.floor(Math.random() * 10);
    }
    return result;
  }

  showPassword() {
    this.show = !this.show;
  }

  get isLoading(): boolean {
    return this.sharedService.isLoading;
  }

  authenticateUser(): void {
    this.errorMessage = "";
    if (this.loginForm.invalid) {
      this.sharedService.isError = true;
      this.errorMessage = 'Missing Required Fields.';
    } else {
      this.sharedService.isError = false;
      this.sharedService.isLoading = true;
      const login = this.authService.login(this.loginForm.value).subscribe(result => {
        if (result.success) {
          localStorage.setItem('navigateAfterReload', 'true');
          AuthService.adminUserProfile = result.data;
          location.reload();
          this.sharedService.isLoading = false;
  
        } else {
          this.sharedService.isLoading = false;
          this.sharedService.isError = true;
          this.errorMessage = 'Invalid Email or Password.';
        }
      }, (error) => {
        this.errorMessage = error?.error?.message;
          this.sharedService.isLoading = false;
          this.sharedService.isError = true
      },
        () => this.sharedService.isLoading = false
      );
      // setTimeout(() => this.cancelLoginRequest(login), 5000);
    }
  }

  checkNavigationAfterReload(): void {
    if (localStorage.getItem('navigateAfterReload') === 'true') {
      localStorage.removeItem('navigateAfterReload');
      this.router.navigate(['admin/dashboard']).catch((e) => {
        window.alert('Technical Error Occurred.');
      });
    }
  }

  cancelLoginRequest(login: Subscription): void {
    login.unsubscribe();
    this.sharedService.isError = true;
    this.sharedService.isLoading = false;
    this.errorMessage = this.errorMessage ? this.errorMessage : 'Request Timeout';
  }
}
