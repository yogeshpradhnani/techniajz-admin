import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ContentComponent } from './component/layout/content/content.component';
import { HeaderComponent } from './component/header/header.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { FeathericonComponent } from './component/feathericon/feathericon.component';
import { FooterComponent } from './component/footer/footer.component';
import { ThemeComponent } from './component/header/theme/theme.component';
import { ProfileComponent } from './component/header/profile/profile.component';
import { SvgIconComponent } from './component/svg-icon/svg-icon.component';
import { BreadcrumbComponent } from './component/breadcrumb/breadcrumb.component';
import { FullComponent } from './component/layout/full/full.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TapToTopComponent } from './component/tap-to-top/tap-to-top.component';
import { ClickOutsideDirective } from './directives/outside.directive';
import { LoaderComponent } from './component/loader/loader.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
@NgModule({
  declarations: [
    ContentComponent,
    HeaderComponent,
    SidebarComponent,
    FeathericonComponent,
    FooterComponent,
    ThemeComponent,
    ProfileComponent,
    SvgIconComponent,
    BreadcrumbComponent,
    FullComponent,
    TapToTopComponent,
    ClickOutsideDirective,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    AngularSvgIconModule.forRoot(),
    TranslateModule.forRoot(),
    MatProgressBarModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonToggleModule
  ],
  exports: [
    ContentComponent,
    FeathericonComponent,
    LoaderComponent,
    SvgIconComponent,
    BreadcrumbComponent,
    TapToTopComponent,
    TranslateModule,
    NgbModule,
    MatProgressBarModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    ThemeComponent
  ]
})
export class SharedModule { }
