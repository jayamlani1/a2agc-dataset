import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MenuIconModule } from './components/menu-icon/menu-icon.module';
import { VisualizationPageModule } from './components/visualization-page/visualization-page.module';
import { OrderByPipe } from './pipes/order-by/order-by.pipe';


@NgModule({
  imports: [
    CommonModule,

    MenuIconModule,
    VisualizationPageModule
  ],
  declarations: [
    OrderByPipe
  ],
  exports: [
    MenuIconModule,
    VisualizationPageModule,

    OrderByPipe
  ]
})
export class SharedModule { }
