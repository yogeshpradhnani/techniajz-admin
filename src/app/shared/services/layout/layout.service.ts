import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  public customizer: string = '';

  public config = {
    settings: {
      layout: '',
      layout_type: 'ltr',
      layout_version: 'dark-only',
      sidebar_type: 'compact-sidebar compact-small material-icon',
      icon: "stroke-svg",
    },
    color: {
      primary_color: '#33BFBF',
      secondary_color: '#ff6150',
    },
  };

  constructor() {
    if (this.config.settings.layout_type == 'box-layout') {
      document.body.classList.add('box-layout');
    }
    document
      .getElementsByTagName('html')[0]
      .setAttribute('dir', this.config.settings.layout_type);

    document.documentElement.style.setProperty(
      '--theme-default',
      this.config.color.primary_color
    );
    document.documentElement.style.setProperty(
      '--theme-secondary',
      this.config.color.secondary_color
    );
  }
}
