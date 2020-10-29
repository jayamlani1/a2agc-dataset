import { Component, Input, OnInit } from '@angular/core';
import { Spec } from 'ngx-vega';

@Component({
  selector: 'agc-visualization-page',
  templateUrl: './visualization-page.component.html',
  styleUrls: ['./visualization-page.component.scss']
})
export class VisualizationPageComponent implements OnInit {
  @Input() spec?: Spec;
  @Input() content?: string;
  @Input() sql?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
