import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Vis4CombinedVisualizationRoutingModule } from './vis4-combined-visualization-routing.module';
import { Vis4CombinedVisualizationComponent } from './vis4-combined-visualization.component';


@NgModule({
  declarations: [Vis4CombinedVisualizationComponent],
  imports: [
    CommonModule,
    Vis4CombinedVisualizationRoutingModule
  ]
})
export class Vis4CombinedVisualizationModule { }
