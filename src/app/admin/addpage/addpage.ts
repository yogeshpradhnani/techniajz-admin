import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class AddPageForm {
  [x: string]: any;
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]], // Title field
      slug : ['', Validators.required],
       
    });
  }
}

