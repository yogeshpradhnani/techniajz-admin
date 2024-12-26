import { ChangeDetectorRef , Component } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-propertys',
  
  templateUrl: './propertys.component.html',
  styleUrl: './propertys.component.scss'
})
export class PropertysComponent {

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

