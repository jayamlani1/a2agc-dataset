import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vis4CombinedVisualizationComponent } from './vis4-combined-visualization.component';

const routes: Routes = [{ path: '', component: Vis4CombinedVisualizationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Vis4CombinedVisualizationRoutingModule { }
