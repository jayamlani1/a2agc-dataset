import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutModule } from './pages/about/about.module';
import { ChangeLogModule } from './pages/change-log/change-log.module';
import { DataErDiagramModule } from './pages/data-er-diagram/data-er-diagram.module';
import { DataSchemaBrowserModule } from './pages/data-schema-browser/data-schema-browser.module';
import { Vis1GeomapOfOpioidDeathsModule } from './pages/vis1-geomap-of-opioid-deaths/vis1-geomap-of-opioid-deaths.module';
import { Vis2AgeAndGenderModule } from './pages/vis2-age-and-gender/vis2-age-and-gender.module';
import {
  Vis3HeatmapOfAccidentalOverdosesModule,
} from './pages/vis3-heatmap-of-accidental-overdoses/vis3-heatmap-of-accidental-overdoses.module';
import { Vis4CombinedVisualizationModule } from './pages/vis4-combined-visualization/vis4-combined-visualization.module';
import { Vis5OpioidTrajectoriesModule } from './pages/vis5-opioid-trajectories/vis5-opioid-trajectories.module';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'about' },
  { path: 'about', loadChildren: () => AboutModule },
  { path: 'vis1-geomap-of-opioid-deaths', loadChildren: () => Vis1GeomapOfOpioidDeathsModule },
  { path: 'vis2-age-and-gender', loadChildren: () => Vis2AgeAndGenderModule },
  { path: 'vis3-heatmap-of-accidental-overdoses', loadChildren: () => Vis3HeatmapOfAccidentalOverdosesModule },
  { path: 'vis4-combined-visualization', loadChildren: () => Vis4CombinedVisualizationModule },
  { path: 'vis5-opioid-trajectories', loadChildren: () => Vis5OpioidTrajectoriesModule },
  { path: 'change-log', loadChildren: () => ChangeLogModule },
  { path: 'data-er-diagram', loadChildren: () => DataErDiagramModule },
  { path: 'data-schema-browser', loadChildren: () => DataSchemaBrowserModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
