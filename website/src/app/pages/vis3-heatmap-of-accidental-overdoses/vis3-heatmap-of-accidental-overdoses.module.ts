import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualizationPageModule } from '../../shared/components/visualization-page/visualization-page.module';
import { Vis3HeatmapOfAccidentalOverdosesRoutingModule } from './vis3-heatmap-of-accidental-overdoses-routing.module';
import { Vis3HeatmapOfAccidentalOverdosesComponent } from './vis3-heatmap-of-accidental-overdoses.component';


@NgModule({
  declarations: [Vis3HeatmapOfAccidentalOverdosesComponent],
  imports: [
    CommonModule,
    Vis3HeatmapOfAccidentalOverdosesRoutingModule,
    VisualizationPageModule
  ]
})
export class Vis3HeatmapOfAccidentalOverdosesModule { }
