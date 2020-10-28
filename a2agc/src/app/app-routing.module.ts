import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'geomap',
    loadChildren: () => import('./pages/geomap/geomap.module').then(m => m.GeomapModule)
  },
  {
    path: 'vis2-opioid-trajectories',
    loadChildren: () => import('./pages/vis2-opioid-trajectories/vis2-opioid-trajectories.module').then(m => m.Vis2OpioidTrajectoriesModule)
  },
  {
    path: 'vis4-combined-visualization',
    loadChildren: () => import('./pages/vis4-combined-visualization/vis4-combined-visualization.module').then(m => m.Vis4CombinedVisualizationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
