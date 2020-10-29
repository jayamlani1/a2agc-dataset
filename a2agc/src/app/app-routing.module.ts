import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'about'
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'geomap',
    loadChildren: () => import('./pages/geomap/geomap.module').then(m => m.GeomapModule)
  },
  {
    path: 'vis3-heatmap-of-accidental-overdoses',
    loadChildren: () => import('./pages/vis3-heatmap-of-accidental-overdoses/vis3-heatmap-of-accidental-overdoses.module')
      .then(m => m.Vis3HeatmapOfAccidentalOverdosesModule)
  },
  {
    path: 'vis4-combined-visualization',
    loadChildren: () => import('./pages/vis4-combined-visualization/vis4-combined-visualization.module')
      .then(m => m.Vis4CombinedVisualizationModule)
  },
  {
    path: 'vis5-opioid-trajectories',
    loadChildren: () => import('./pages/vis5-opioid-trajectories/vis5-opioid-trajectories.module')
      .then(m => m.Vis5OpioidTrajectoriesModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
