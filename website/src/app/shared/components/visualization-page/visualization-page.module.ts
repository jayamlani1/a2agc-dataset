import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownModule } from 'ngx-markdown';
import { NgxVegaModule } from 'ngx-vega';

import { VisualizationPageComponent } from './visualization-page.component';


@NgModule({
  declarations: [VisualizationPageComponent],
  exports: [VisualizationPageComponent],
  imports: [
    CommonModule,
    MarkdownModule.forChild(),
    MatExpansionModule,
    MatIconModule,
    NgxVegaModule
  ]
})
export class VisualizationPageModule { }
