import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VisualizationPageModule } from '../../shared/components/visualization-page/visualization-page.module';
import { Vis2AgeAndGenderRoutingModule } from './vis2-age-and-gender-routing.module';
import { Vis2AgeAndGenderComponent } from './vis2-age-and-gender.component';

@NgModule({
  declarations: [Vis2AgeAndGenderComponent],
  imports: [
    CommonModule,
    Vis2AgeAndGenderRoutingModule,
    VisualizationPageModule
  ]
})
export class Vis2AgeAndGenderModule { }
