import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPagesRoutingModule } from './error-pages-routing.module';
import { Error404Component } from './error404/error404.component';


@NgModule({
  declarations: [
    Error404Component,
  ],
  imports: [
    CommonModule,
    ErrorPagesRoutingModule
  ]
})
export class ErrorPagesModule { }
