import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { environment } from '../environments/environment';


const routes: Routes = [
  {
    path: 'geomap',
    loadChildren: () => import('./pages/geomap/geomap.module').then(m => m.GeomapModule)
  },
  {
    path: 'vis2-age-and-gender',
    loadChildren: () => import('./pages/vis2-age-and-gender/vis2-age-and-gender.module').then(m => m.Vis2AgeAndGenderModule)
  },
  {
    path: 'vis1-geomap-of-opioid-deaths',
    loadChildren: () => import('./pages/vis1-geomap-of-opioid-deaths/vis1-geomap-of-opioid-deaths.module').then(m => m.Vis1GeomapOfOpioidDeathsModule)
  },
  {
    path: 'vis3-heatmap-of-accidental-overdoses',
    loadChildren: () => import('./pages/vis3-heatmap-of-accidental-overdoses/vis3-heatmap-of-accidental-overdoses.module').then(m => m.Vis3HeatmapOfAccidentalOverdosesModule)
  },
  {
    path: 'vis4-combined-visualization',
    loadChildren: () => import('./pages/vis4-combined-visualization/vis4-combined-visualization.module').then(m => m.Vis4CombinedVisualizationModule)
  },
  {
    path: 'vis5-opioid-trajectories',
    loadChildren: () => import('./pages/vis5-opioid-trajectories/vis5-opioid-trajectories.module').then(m => m.Vis5OpioidTrajectoriesModule)
  },
  { path: 'change-log', loadChildren: () => import('./pages/change-log/change-log.module').then(m => m.ChangeLogModule) },
  { path: 'data-er-diagram', loadChildren: () => import('./pages/data-er-diagram/data-er-diagram.module').then(m => m.DataErDiagramModule) },
  { path: 'data-schema-browser', loadChildren: () => import('./pages/data-schema-browser/data-schema-browser.module').then(m => m.DataSchemaBrowserModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: environment.production})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
