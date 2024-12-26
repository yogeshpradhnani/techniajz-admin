import { Component ,OnInit} from '@angular/core';
import { LayoutService } from '../../../../shared/services/layout/layout.service';


@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent  implements OnInit {

  public dark: boolean = this.layout.config.settings.layout_version == 'dark-only' ? true : false;

  constructor(public layout: LayoutService) { }

  layoutToggle() {
    this.dark = !this.dark;
    this.dark
      ? document.body.classList.remove('dark-only')
      : document.body.classList.add('dark-only');
    this.layout.config.settings.layout_version = this.dark
      ? 'dark-only'
      : 'dark-only';
    }

  ngOnInit(): void {
    this.layoutToggle();
   }

}
