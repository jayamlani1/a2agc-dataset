import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { NgxVegaModule } from 'ngx-vega';

import { Vis1GeomapOfOpioidDeathsRoutingModule } from './vis1-geomap-of-opioid-deaths-routing.module';
import { Vis1GeomapOfOpioidDeathsComponent } from './vis1-geomap-of-opioid-deaths.component';


@NgModule({
  declarations: [Vis1GeomapOfOpioidDeathsComponent],
  imports: [
    CommonModule,
    Vis1GeomapOfOpioidDeathsRoutingModule,
    MarkdownModule.forChild(),
    NgxVegaModule,
  ]
})
export class Vis1GeomapOfOpioidDeathsModule { }
