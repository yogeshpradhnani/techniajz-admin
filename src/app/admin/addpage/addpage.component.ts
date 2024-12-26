import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-addpage',  
  templateUrl: './addpage.component.html',
  styleUrl: './addpage.component.scss'
})
export class AddpageComponent {

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
