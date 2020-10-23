import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GeomapRoutingModule } from './geomap-routing.module';
import { GeomapComponent } from './geomap.component';


@NgModule({
  imports: [
    CommonModule,

    GeomapRoutingModule
  ],
  declarations: [GeomapComponent],
})
export class GeomapModule { }
