import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { ChangeForm } from './change';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})
export class ChangeComponent implements OnInit {

  changeForm: ChangeForm;
  constructor(private formBuilder: FormBuilder, private authService: AuthService,private http : HttpClient,private router: Router) {  }
  ngOnInit(): void {
    this.changeForm = new ChangeForm(this.formBuilder);
  }

  onSubmit() {
    console.log("check =",this.changeForm.formGroup.valid);
    if (this.changeForm.formGroup.valid) {

      const formData = new FormData();
      formData.append('oldPassword', this.changeForm.formGroup.value.oldPassword);
      formData.append('newPassword', this.changeForm.formGroup.value.newPassword);
      formData.append('confirmPassword' , this.changeForm.formGroup.value.confirmPassword);

      const token = localStorage.getItem('jwt')

      
      if (!token) {
        this.router.navigate(['/login']).then(() => {
          window.history.replaceState({}, '', '/login'); // Clear the history to prevent going back
        });
        return;
      }
  
      const headers = new HttpHeaders({
        Authorization: token
      })
  


      const url = 'http://localhost:3001/user/changepassword'
      this.http.post(url,formData ,{ headers }).subscribe(
        (Response:any) =>{
          console.log("data send succefully")
        },
        (error) =>{
          console.log("error ",error)
        }
      )
      
    } else {
      console.log('Form is invalid');
    }
  }
}
