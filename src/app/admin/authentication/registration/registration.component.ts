import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { AddPropertyUserForm } from '../authentication';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  addPropertyUserForm: AddPropertyUserForm;
  selectedImages: { file: File; preview: string }[] = [];
  constructor(private formBuilder: FormBuilder,private router:Router,private http:HttpClient) {}

  ngOnInit(): void {
    this.addPropertyUserForm = new AddPropertyUserForm(this.formBuilder);
  }

  facilities: string[] = ['Wi-Fi', 'Parking', 'Swimming Pool', 'Gym'];

  get facilityControls() {
    return this.addPropertyUserForm.formGroup.get('facility') as FormArray;
  }

  onFacilityChange(event: Event, facility: string): void {
    const checkbox = event.target as HTMLInputElement;
    // console.log("checkbox = ",checkbox.checked)
    if (checkbox.checked) {
      this.facilityControls.push(this.formBuilder.control(facility));
    } else {
      const index = this.facilityControls.controls.findIndex(
        (control: { value: string; }) => control.value === facility
      );
      this.facilityControls.removeAt(index);
    }
  }



  
  onFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files) {
      Array.from(input.files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          console.log("er =",e)
          this.selectedImages.push({ file, preview: e.target.result });
        };
        reader.readAsDataURL(file);
      });
    }
  }

  removeImage(index: number): void {
    this.selectedImages.splice(index, 1);
  }

  onSubmit() {
    console.log("helo")
    const formData = new FormData();
    formData.append('location', this.addPropertyUserForm.formGroup.value.location);
    formData.append('facility', this.addPropertyUserForm.formGroup.value.facility);
    formData.append('content', this.addPropertyUserForm.formGroup.value.content);
    formData.append('content', this.addPropertyUserForm.formGroup.value.content);
    console.log("check =",this.addPropertyUserForm.formGroup.value.facility);


    this.selectedImages.forEach((image, index) =>
      
      formData.append(`images[${index}]`, image.file)
      
    );

    const url = 'http://localhost:3001/user/addProperty'
    this.http.post(url,formData).subscribe(
      (response:any) =>{

        console.log("your data is succefully transfor")
      },
      (error) =>{
        console.log("errror is occur",error);
      }
    );

    console.log('Form submitted', formData);
  }
}
