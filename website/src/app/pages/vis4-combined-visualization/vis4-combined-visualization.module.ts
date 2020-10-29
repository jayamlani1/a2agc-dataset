import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualizationPageModule } from '../../shared/components/visualization-page/visualization-page.module';
import { Vis4CombinedVisualizationRoutingModule } from './vis4-combined-visualization-routing.module';
import { Vis4CombinedVisualizationComponent } from './vis4-combined-visualization.component';


@NgModule({
  declarations: [Vis4CombinedVisualizationComponent],
  imports: [
    CommonModule,
    Vis4CombinedVisualizationRoutingModule,
    VisualizationPageModule
  ]
})
export class Vis4CombinedVisualizationModule { }
