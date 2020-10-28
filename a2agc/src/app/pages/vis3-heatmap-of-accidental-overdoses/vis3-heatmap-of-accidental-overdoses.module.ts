import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { NgxVegaModule } from 'ngx-vega';

import { Vis3HeatmapOfAccidentalOverdosesRoutingModule } from './vis3-heatmap-of-accidental-overdoses-routing.module';
import { Vis3HeatmapOfAccidentalOverdosesComponent } from './vis3-heatmap-of-accidental-overdoses.component';


@NgModule({
  declarations: [Vis3HeatmapOfAccidentalOverdosesComponent],
  imports: [
    CommonModule,
    Vis3HeatmapOfAccidentalOverdosesRoutingModule,
    MarkdownModule.forChild(),
    NgxVegaModule
  ]
})
export class Vis3HeatmapOfAccidentalOverdosesModule { }
