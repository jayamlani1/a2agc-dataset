import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { NgxVegaModule } from 'ngx-vega';

import { GeomapRoutingModule } from './geomap-routing.module';
import { GeomapComponent } from './geomap.component';


@NgModule({
  imports: [
    CommonModule,

    MarkdownModule.forChild(),
    NgxVegaModule,

    GeomapRoutingModule
  ],
  declarations: [GeomapComponent],
})
export class GeomapModule { }
