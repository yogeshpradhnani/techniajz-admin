import { Component } from '@angular/core';
import { SettingForm } from '../setting';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting-update',

  templateUrl: './setting-update.component.html',
  styleUrl: './setting-update.component.scss'
})
export class SettingUpdateComponent {

  settingForm: SettingForm;
  selectedImages: any = {};
  data : any  ={
    logo :  "" ,
    siteName :"",
    email  :"",
    mobile :"",
    description :"",
    copyRight :"",
  }

  constructor(private formBuilder: FormBuilder,private router:Router,private http:HttpClient) {}

  ngOnInit(): void {
    this.settingForm = new SettingForm(this.formBuilder);

    const token = localStorage.getItem("jwt")
    console.log("token =",token)

    if (!token) {
      this.router.navigate(['/login']).then(() => {
        window.history.replaceState({}, '', '/login'); // Clear the history to prevent going back
      });
      return;
    }

    const headers = new HttpHeaders({
      Authorization: token
    })

    const url = "http://localhost:3001/user/getWebData"

    this.http.get(url,{ headers }).subscribe(
      (respone : any) =>{
          console.log("data =",respone.Data)
        this.data = respone.Data;
      },
      (error)=>{
        console.log("data is not found")
      }
    );

  }

  

    onFileSelected(event:any){
      const file : File = event.target.files[0];
      console.log("file =",file);
      if(file){
        const reader = new FileReader();
        reader.onload = () => {
          this.selectedImages = {
            name: file.name,
            previewUrl: reader.result as string,
            file: file, // Store the file object for submission
          };
        };
        reader.readAsDataURL(file);
      }
    }
    

    onSubmit(){
      
      const url = "http://localhost:3001/user/updateSetting"
      const formData = new FormData(); 
      formData.append("siteName", this.settingForm.formGroup.value.siteName);
      formData.append("mobile", this.settingForm.formGroup.value.mobile);
      formData.append("email", this.settingForm.formGroup.value.email);
      formData.append("description", this.settingForm.formGroup.value.description);
      formData.append("copyRight", this.settingForm.formGroup.value.copyRight);
      if (this.selectedImages?.file) {
          formData.append("logo", this.selectedImages.file);
      }
      console.log("data= ",formData)
      this.http.put(url,formData).subscribe(
        (response:any) =>{
          this.data = response.Data;
        },
        (error)=>{
          console.error("Error while submitting data:", error);    
        
          alert(error)
        }
      )
    }

}

  



