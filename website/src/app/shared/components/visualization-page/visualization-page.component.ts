import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Spec } from 'ngx-vega';

@Component({
  selector: 'agc-visualization-page',
  templateUrl: './visualization-page.component.html',
  styleUrls: ['./visualization-page.component.scss']
})
export class VisualizationPageComponent implements OnInit {
  @HostBinding('class') readonly clsName = 'agc-visualization-page';

  @Input() headline = 'Marion County Opioid Addiction Report';
  @Input() title?: string;
  @Input() description?: string;
  @Input() spec?: Spec;
  @Input() content?: string;
  @Input() sql?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
