import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Options } from 'ngx-vega';
import { Subscription } from 'rxjs';
import { createGeoZoomPatch } from 'src/app/shared/components/visualization-page/shared/geomap-zoom-patch';

interface Visualization {
  title: string;
  description: string;
  spec: string;
  options: Options;
  content: string;
  sql: string;
  csv: string;
}

interface VisualizationDictionary {
  [key: string]: Visualization;
}

@Component({
  selector: 'agc-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.scss']
})
export class VisualizationComponent implements OnInit {
  visualizationID = '';
  private routeSub: Subscription = {} as Subscription;
  visualizations: VisualizationDictionary = {
    'vis1-geomap-of-opioid-deaths': {
      title: 'Accidental Drug Overdose Deaths',
      description: 'Marion County by Place of Injury (2010-2018)',
      spec: 'assets/pages/vis1-geomap-of-opioid-deaths/vis.vl.json',
      options: {
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
      },
      content: 'assets/pages/vis1-geomap-of-opioid-deaths/README.md',
      sql: 'assets/pages/vis1-geomap-of-opioid-deaths/data.sql',
      csv: 'assets/generated/vis-geomap-opioid-deaths.csv'
    },
    'vis2-age-and-gender': {
      title: 'Age Group & Gender of Accidental Drug Overdose',
      description: 'Marion County Deaths & Population (2010-2018)',
      spec: 'assets/pages/vis2-age-and-gender/vis.vl.json',
      options: {},
      content: 'assets/pages/vis2-age-and-gender/README.md',
      sql: 'assets/pages/vis2-age-and-gender/data.sql',
      csv: 'assets/generated/vis2-data/death-counts.csv'
    },
    'vis3-heatmap-of-accidental-overdoses': {
      title: 'Age Group & Gender of Accidental Drug Overdose',
      description: 'Marion County by Deaths & Population (2010-2018)',
      spec: 'assets/pages/vis3-heatmap-of-accidental-overdoses/vis.vl.json',
      options: {},
      content: 'assets/pages/vis3-heatmap-of-accidental-overdoses/README.md',
      sql: 'assets/pages/vis4-combined-visualization/data.sql',
      csv: 'assets/generated/visualization4/data.csv'
    },
    'vis4-combined-visualization': {
      title: 'Accidental Drug Overdose Deaths',
      description: 'Marion County by Substance, Sex, & Age (2010-2018)',
      spec: 'assets/pages/vis4-combined-visualization/vis.vl.json',
      options: {},
      content: 'assets/pages/vis4-combined-visualization/README.md',
      sql: 'assets/pages/vis4-combined-visualization/data.sql',
      csv: 'assets/generated/visualization4/data.csv'
    },
    'vis5-opioid-trajectories': {
      title: 'Opioid Death Datasets',
      description: 'Marion County by History of Opioid Prescription, Previous Overdose, Incarceration, Health Data (2010-2018)',
      spec: 'assets/pages/vis5-opioid-trajectories/vis.vl.json',
      options: {},
      content: 'assets/pages/vis5-opioid-trajectories/README.md',
      sql: 'assets/pages/vis5-opioid-trajectories/data.sql',
      csv: 'assets/generated/visualization5/data.csv'
    }
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.visualizationID = params['id'];
    });
  }

  get visualization(): Visualization {
    return this.visualizations[this.visualizationID];
  }

}
