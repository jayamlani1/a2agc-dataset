import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'geomap',
    loadChildren: () => import('./pages/geomap/geomap.module').then(m => m.GeomapModule)
  },
<<<<<<< Updated upstream
  { path: 'vis1-geomap-of-opioid-deaths', loadChildren: () => import('./pages/vis1-geomap-of-opioid-deaths/vis1-geomap-of-opioid-deaths.module').then(m => m.Vis1GeomapOfOpioidDeathsModule) }
=======
  { path: 'vis3-heatmap-of-accidental-overdoses', loadChildren: () => import('./pages/vis3-heatmap-of-accidental-overdoses/vis3-heatmap-of-accidental-overdoses.module').then(m => m.Vis3HeatmapOfAccidentalOverdosesModule) }
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
