import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-authentication',
  
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss'
})
export class AuthenticationComponent {


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
