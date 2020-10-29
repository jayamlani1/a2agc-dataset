import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vis1GeomapOfOpioidDeathsComponent } from './vis1-geomap-of-opioid-deaths.component';

const routes: Routes = [{ path: '', component: Vis1GeomapOfOpioidDeathsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Vis1GeomapOfOpioidDeathsRoutingModule { }
