import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'geomap',
    loadChildren: () => import('./pages/geomap/geomap.module').then(m => m.GeomapModule)
  },
  {
    path: 'vis5-opioid-trajectories',
    loadChildren: () => import('./pages/vis5-opioid-trajectories/vis5-opioid-trajectories.module').then(m => m.Vis5OpioidTrajectoriesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
