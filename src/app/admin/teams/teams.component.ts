import { Component, ChangeDetectorRef } from '@angular/core';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss'
})
export class TeamsComponent {
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