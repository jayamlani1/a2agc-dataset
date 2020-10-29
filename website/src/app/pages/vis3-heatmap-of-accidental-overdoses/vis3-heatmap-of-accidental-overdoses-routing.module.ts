import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vis3HeatmapOfAccidentalOverdosesComponent } from './vis3-heatmap-of-accidental-overdoses.component';

const routes: Routes = [{ path: '', component: Vis3HeatmapOfAccidentalOverdosesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Vis3HeatmapOfAccidentalOverdosesRoutingModule { }
