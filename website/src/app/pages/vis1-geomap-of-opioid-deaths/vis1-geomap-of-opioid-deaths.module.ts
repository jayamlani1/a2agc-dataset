import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualizationPageModule } from '../../shared/components/visualization-page/visualization-page.module';
import { Vis1GeomapOfOpioidDeathsRoutingModule } from './vis1-geomap-of-opioid-deaths-routing.module';
import { Vis1GeomapOfOpioidDeathsComponent } from './vis1-geomap-of-opioid-deaths.component';


@NgModule({
  declarations: [Vis1GeomapOfOpioidDeathsComponent],
  imports: [
    CommonModule,
    Vis1GeomapOfOpioidDeathsRoutingModule,
    VisualizationPageModule
  ]
})
export class Vis1GeomapOfOpioidDeathsModule { }
