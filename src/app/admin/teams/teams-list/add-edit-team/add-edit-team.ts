import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class AddEditTeamForm {
  formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      name: [null, [ Validators.required,Validators.pattern("^[a-zA-Z '-]+$")]],
      mobile: [null, [Validators.pattern('^[0-9]{10}$'),Validators.required]],
      gender: [null, [Validators.required]],
      email: [null, [Validators.email,Validators.required]],
      designationId: [null],
      birthDate: ['',[Validators.required]],
      joiningDate: ['',[Validators.required]],
      companyName: [null],
      alternate_number: ["",[Validators.pattern('^[0-9]{10}$')]],
      isWhatsappNumber: [false],
      emergencyNumber: ['',[Validators.pattern('^[0-9]{10}$')]],
      responsibilities: [""],
      highest_qualification: [""],
      communicationSkill: [""],
      address:[""],
      permanentAddress:[""],
      blood_group:[null],
      current_salary:[""],
      image:[""]
    });
  }
  
}