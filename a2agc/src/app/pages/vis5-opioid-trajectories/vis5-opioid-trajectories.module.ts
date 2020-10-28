import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { NgxVegaModule } from 'ngx-vega';

import { Vis5OpioidTrajectoriesRoutingModule } from './vis5-opioid-trajectories-routing.module';
import { Vis5OpioidTrajectoriesComponent } from './vis5-opioid-trajectories.component';


@NgModule({
  declarations: [Vis5OpioidTrajectoriesComponent],
  imports: [
    CommonModule,
    Vis5OpioidTrajectoriesRoutingModule,
    MarkdownModule.forChild(),
    NgxVegaModule
  ]
})
export class Vis5OpioidTrajectoriesModule { }
