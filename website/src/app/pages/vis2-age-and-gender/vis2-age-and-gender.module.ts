import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { NgxVegaModule } from 'ngx-vega';

import { Vis2AgeAndGenderRoutingModule } from './vis2-age-and-gender-routing.module';
import { Vis2AgeAndGenderComponent } from './vis2-age-and-gender.component';


@NgModule({
  declarations: [Vis2AgeAndGenderComponent],
  imports: [
    CommonModule,
    Vis2AgeAndGenderRoutingModule,
    MarkdownModule.forChild(),
    NgxVegaModule
  ]
})
export class Vis2AgeAndGenderModule { }
