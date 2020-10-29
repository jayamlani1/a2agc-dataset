import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GeomapComponent } from './geomap.component';


const routes: Routes = [
  {
    path: '',
    component: GeomapComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeomapRoutingModule { }
