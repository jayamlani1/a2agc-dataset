import { Component, OnInit } from '@angular/core';
import { Options } from 'ngx-vega';

import { createGeoZoomPatch } from '../../shared/components/visualization-page/shared/geomap-zoom-patch';


@Component({
  selector: 'agc-vis1-geomap-of-opioid-deaths',
  templateUrl: './vis1-geomap-of-opioid-deaths.component.html',
  styleUrls: ['./vis1-geomap-of-opioid-deaths.component.scss']
})
export class Vis1GeomapOfOpioidDeathsComponent implements OnInit {

  vegaOptions: Options = {
    renderer: 'svg', actions: true,
    patch: (spec) => {
      spec = createGeoZoomPatch({
        center: [87.44305475, 38.76622477],
        zoomLevels: [3200, 250000],
        initialZoom: 6400,
      })(spec);

      // TODO: Determine width/height programmatically
      spec.width = 941;
      spec.height = 941;
      return spec;
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
