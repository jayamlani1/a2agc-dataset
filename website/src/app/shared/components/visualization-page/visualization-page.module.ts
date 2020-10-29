import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { NgxVegaModule } from 'ngx-vega';

import { VisualizationPageComponent } from './visualization-page.component';


@NgModule({
  declarations: [VisualizationPageComponent],
  exports: [VisualizationPageComponent],
  imports: [
    CommonModule,
    MarkdownModule.forChild(),
    NgxVegaModule
  ]
})
export class VisualizationPageModule { }
