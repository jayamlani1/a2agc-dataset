import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vis2AgeAndGenderComponent } from './vis2-age-and-gender.component';

const routes: Routes = [{ path: '', component: Vis2AgeAndGenderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Vis2AgeAndGenderRoutingModule { }
