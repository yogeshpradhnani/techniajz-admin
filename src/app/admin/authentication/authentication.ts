import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class AddPropertyUserForm {
  [x: string]: any;
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      location: ['', Validators.required],
      facility: this.formBuilder.array([]), //
      content: ['', [Validators.required, Validators.minLength(10)]],
    });
  }
}

