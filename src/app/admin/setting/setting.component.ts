import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-setting',
   templateUrl: './setting.component.html',
  styleUrl: './setting.component.scss'
})
export class SettingComponent {

  
    constructor(
      private sharedService: SharedService,
      private cdref: ChangeDetectorRef,
    ) { }
  
    get isLoading(): boolean {
      return this.sharedService.isLoading;
    }
    ngAfterContentChecked(): void {
      this.cdref.detectChanges();
    }
    ngOnInit() { }
  }  
  