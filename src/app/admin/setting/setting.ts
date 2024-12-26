import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class SettingForm {
  formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group(
      {
        siteName: ['', [Validators.required, Validators.minLength(6)]],
        mobile: ['', [Validators.required]],
        email: ['', [Validators.required]],
        description: ['', [Validators.required]],
        copyRight: ['', [Validators.required]],

      });
  }

}
