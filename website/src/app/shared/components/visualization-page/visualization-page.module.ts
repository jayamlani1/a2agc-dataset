import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgxVegaModule } from 'ngx-vega';

import { VisualizationPageComponent } from './visualization-page.component';


@NgModule({
  declarations: [VisualizationPageComponent],
  exports: [VisualizationPageComponent],
  imports: [
    CommonModule,
    MarkdownModule.forChild(),
    MatExpansionModule,
    NgxVegaModule
  ]
})
export class VisualizationPageModule { }
