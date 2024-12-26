import { Component } from '@angular/core';
import { genderType, GENDER_TYPE} from "../../../../shared/admin-status";
import { AddEditUserForm } from "./add-edit-user";
import { SharedService } from "src/app/shared/shared.service";
import { FormBuilder } from "@angular/forms";
import { UsersService } from '../../user.service';
@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrl: './add-edit-user.component.scss'
})
export class AddEditUserComponent {
  isEditMode : boolean = false;
  public validate = false;
  addEditUserForm: AddEditUserForm;
  genderTypeList: genderType[];
  selectedFiles: any = {};
  constructor(private formBuilder: FormBuilder, private sharedService: SharedService, private userService: UsersService) {}

  ngOnInit() {
    this.genderTypeList = GENDER_TYPE;
  }
  
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedFiles = {
          name: file.name,
          previewUrl: reader.result as string,
        };
      };
      reader.readAsDataURL(file);
      this.addEditUserForm.formGroup.get("image")?.setValue(file);
    }
  }

  errorMsgShowed(controlName: string) {
    const control = this.addEditUserForm.formGroup?.get(controlName);
    return {
      "error-icon": control?.hasError("required") && this.validate,
      "success-icon": !control?.hasError("required") && this.validate,
      "error-shadow": control?.hasError("required") && this.validate,
      "success-shadow": !control?.hasError("required") && this.validate,
    };
  }

  goBack() {
    this.sharedService.goBack();
  }

  onSubmit(): void{
    alert("Submitted");

  }
}
