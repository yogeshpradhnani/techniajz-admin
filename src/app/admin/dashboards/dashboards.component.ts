import { Component, ChangeDetectorRef } from '@angular/core';
import { SharedService } from '../../shared/shared.service'

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss']
})
export class DashboardsComponent {
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
