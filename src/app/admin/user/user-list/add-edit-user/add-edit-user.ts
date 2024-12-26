import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class AddEditUserForm {
  formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      name: [null, [ Validators.required,Validators.pattern("^[a-zA-Z '-]+$")]],
      mobile: [null, [Validators.pattern('^[0-9]{10}$'),Validators.required]],
      gender: [null, [Validators.required]],
      email: [null, [Validators.email,Validators.required]],
      image:[""]
    });
  } 
}