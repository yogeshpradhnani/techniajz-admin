import { TeamsService } from "./../../teams.service";
import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { genderType, GENDER_TYPE, bloodGroup, BLOOD_GROUP } from "../../../../shared/admin-status";
import { ActivatedRoute, Router } from "@angular/router";
import { SharedService } from "src/app/shared/shared.service";
import { AddEditTeamForm } from "./add-edit-team";
import { ToastrService } from "ngx-toastr";
// import { employeeType } from "src/app/admin/projects/project-list/add-edit-project/add-edit-projects";
import { DatePipe, Location } from "@angular/common";

@Component({
  selector: "app-add-team",
  templateUrl: "./add-edit-team.component.html",
  styleUrl: "./add-edit-team.component.scss",
  providers: [DatePipe],
})
export class AddEditTeamComponent {
  addEditTeamForm: AddEditTeamForm;
  employeeId: string;
  genderTypeList: genderType[];
  bloodGroupList: bloodGroup[];
  designationList: [];
  permissionList: any;
  employeePermission: any;
  errorMessage: string;
  isError: boolean = false;
  selectedFiles: any = {};
  isEditMode: boolean = false;
  isDetail: boolean = true;
  isPermission: boolean = true;
  isProfile: boolean = false;
  teamId: string;
  teamName: string;
  maxDate: any = new Date();
  show: boolean = false;
  public validate = false;
  public active = 1;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private sharedService: SharedService, private teamsService: TeamsService, public toastrService: ToastrService, private location: Location, private datePipe: DatePipe) {}

  ngOnInit() {
    this.genderTypeList = GENDER_TYPE;
    this.bloodGroupList = BLOOD_GROUP;
    this.maxDate = this.sharedService.maxDate;
    this.addEditTeamForm = new AddEditTeamForm(this.formBuilder);
    this.getDesignationList();
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.teamId = params["id"];
        this.isEditMode = true;

        this.route.data.subscribe((data) => {
          if (data["title"] === "Edit Team") {
            this.isDetail = true;
            this.isPermission = true;
            this.onEditMode(this.teamId);
          } else if (data["title"] === "Edit Profile") {
            this.isProfile = true;
            this.isDetail = true;
            this.isPermission = false;
            this.onEditMode(this.teamId);
          }
        });
      } else {
        this.isEditMode = false;
        this.isDetail = true;
        this.isPermission = false;
      }
    });
  }

  errorMsgShowed(controlName: string) {
    const control = this.addEditTeamForm.formGroup?.get(controlName);
    return {
      "error-icon": control?.hasError("required") && this.validate,
      "success-icon": !control?.hasError("required") && this.validate,
      "error-shadow": control?.hasError("required") && this.validate,
      "success-shadow": !control?.hasError("required") && this.validate,
    };
  }

  onEditMode(id: any): void {
    this.teamsService.getEmployeeDetail(id).subscribe({
      next: (result) => {
        if (result.data) {
          const info = result.data.employee;

          const birthDate = this.transformDate(info.birthDate);
          const joiningDate = this.transformDate(info.joiningDate);

          this.addEditTeamForm.formGroup.patchValue({
            ...info,
            birthDate,
            joiningDate,
            designationId: info.designationId?._id,
          });

          this.teamName = info.name;
          this.employeeId = info.id;
          this.employeePermission = info.permission;
        }
      },
      error: (err) => {
        console.error("Error fetching employee details:", err);
      },
    });
  }

  showPassword() {
    this.show = !this.show;
  }

  transformDate(dateString: string): string {
    const date = this.datePipe.transform(dateString, "yyyy-MM-dd") || "";
    return date;
  }

  changeResponseDateFormat(dateString: string): string {
    const year = dateString.slice(6, 10);
    const month = dateString.slice(3, 5);
    const day = dateString.slice(0, 2);
    return `${year}-${month}-${day}`;
  }

  changePayloadDateFormat(dateString: string): string {
    const year = dateString.slice(0, 4);
    const month = dateString.slice(5, 7);
    const day = dateString.slice(8, 10);
    return `${day}-${month}-${year}`;
  }

  onSubmit() {
    this.validate = true;
    if (this.addEditTeamForm.formGroup.valid) {
      this.validate = false;
      let value = this.addEditTeamForm.formGroup.value;
      const formData = new FormData();
      Object.keys(this.addEditTeamForm.formGroup.controls).forEach((key) => {
        formData.append(key, value[key]);
      });
      this.sharedService.isError = false;
      this.sharedService.isLoading = true;
      const handleError = (error: any) => {
        this.errorMessage = error?.error?.message;
        this.isError = true;
        this.sharedService.isError = true;
        this.sharedService.isLoading = false;
      };
      const handleComplete = () => {
        this.sharedService.isLoading = false;
      };
      if (this.isEditMode) {
        this.teamsService.editEmployee(formData, this.teamId).subscribe(
          (result) => {
            if (result.success) {
              if (this.isProfile) {
                this.sharedService.goBack();
              } else {
                this.sharedService.goBack();
              }
            }
          },
          handleError,
          handleComplete
        );
      } else {
        this.teamsService.addEmployee(formData).subscribe(
          (result) => {
            if (result.success) {
              this.sharedService.goBack();
              const newEmployee = result.data.newEmployee;
              this.teamId = newEmployee._id;
              this.employeeId = newEmployee.id;
              this.isDetail = false;
              this.isPermission = true;
            }
          },
          handleError,
          handleComplete
        );
      }
    }
  }

  setPermission(): void {
    const data: any = {};
    for (let entry of this.permissionList) {
      if (entry.status) {
        data[entry.slug] = entry.status;
      } else {
        data[entry.slug] = false;
      }
    }
    this.teamsService.updateEmployeePermission(data, this.employeeId).subscribe(
      (result) => {
        if (result.data) {
          this.router.navigate(["admin/team/list"]);
        }
      },
      (error) => {
        this.errorMessage = error?.error?.message;
        this.isError = true;
        this.sharedService.isError = true;
      },
      () => (this.sharedService.isLoading = false)
    );
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
      this.addEditTeamForm.formGroup.get("image")?.setValue(file);
    }
  }

  close() {
    this.isError = false;
  }

  goBack() {
    this.sharedService.goBack();
  }

  getDesignationList(): void {
    this.teamsService.getAllDesignation().subscribe((result) => {
      if (result.success) {
        this.designationList = result.data.designation;
      }
    });
  }
}
