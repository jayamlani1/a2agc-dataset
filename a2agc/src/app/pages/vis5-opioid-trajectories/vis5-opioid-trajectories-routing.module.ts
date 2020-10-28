import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vis5OpioidTrajectoriesComponent } from './vis5-opioid-trajectories.component';

const routes: Routes = [{ path: '', component: Vis5OpioidTrajectoriesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Vis5OpioidTrajectoriesRoutingModule { }
