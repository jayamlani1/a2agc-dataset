import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualizationPageModule } from '../../shared/components/visualization-page/visualization-page.module';
import { Vis5OpioidTrajectoriesRoutingModule } from './vis5-opioid-trajectories-routing.module';
import { Vis5OpioidTrajectoriesComponent } from './vis5-opioid-trajectories.component';


@NgModule({
  declarations: [Vis5OpioidTrajectoriesComponent],
  imports: [
    CommonModule,
    Vis5OpioidTrajectoriesRoutingModule,
    VisualizationPageModule
  ]
})
export class Vis5OpioidTrajectoriesModule { }
