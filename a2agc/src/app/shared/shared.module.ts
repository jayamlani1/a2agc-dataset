import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MenuIconModule } from './components/menu-icon/menu-icon.module';
import { OrderByPipe } from './pipes/order-by/order-by.pipe';


@NgModule({
  imports: [
    CommonModule,

    MenuIconModule
  ],
  declarations: [
    OrderByPipe
  ],
  exports: [
    MenuIconModule,

    OrderByPipe
  ]
})
export class SharedModule { }
