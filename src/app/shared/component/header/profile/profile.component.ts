import { environment } from 'src/environments/environment';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../../../../auth/auth.service";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  userName: string;
  profilePicture:string;
  role: string;
  imageUrl= environment.imageBaseUrl;
  constructor(private router: Router) { }

  logOut() {
    AuthService.logout();
    this.router.navigate(['/user-login'])
  }

  
  ngOnInit() {
    const storedUserName = localStorage.getItem('userName');
    this.userName = storedUserName !== null ? storedUserName : '';
    const storedRole = localStorage?.getItem('role') ;
    console.log(storedRole);
    
    this.role = storedRole != undefined ? storedRole : '';
    const img_Url = localStorage.getItem('profileImage');
    this.profilePicture = img_Url!== null ? img_Url : '' 
  }
}