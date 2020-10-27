import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MenuIconModule } from './menu-icon/menu-icon.module';


@NgModule({
  imports: [
    CommonModule,

    MenuIconModule
  ],
  exports: [
    MenuIconModule
  ]
})
export class SharedModule { }
