import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class ChangeForm {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group(
      {
        oldPassword: ['', Validators.required],
        newPassword: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
      },
      {
        validators: this.passwordsMatch
      }
    );
  }

  // Custom Validator to check if newPassword and confirmPassword match
  passwordsMatch(group: FormGroup): { [key: string]: any } | null {
    const newPassword = group.get('newPassword')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return newPassword === confirmPassword ? null : { mismatch: true };
  }
}
