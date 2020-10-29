import { ScrollDispatcher } from '@angular/cdk/overlay';
import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

import { buildInfo } from './build-info';
import { PageLink } from './core/components/page-menu/page-menu.component';


@Component({
  selector: 'agc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostBinding('class') readonly clsName = 'agc-root';

  // TODO move these values to state
  readonly menuHeader = 'Marion County Opioid Addiction Report';
  readonly pages: PageLink[] = [
    {
      path: '/vis1-geomap-of-opioid-deaths',
      title: 'Accidental Drug Overdose Deaths',
      description: 'Marion County by Place of Injury (2010-2018)'
    },
    {
      path: '/vis2-age-and-gender',
      title: 'Age Group & Gender of Accidental Drug Overdose',
      description: 'Marion County Deaths &amp; Population (2010-2018)'
    },
    {
      path: '/vis3-heatmap-of-accidental-overdoses',
      title: 'Age Group & Gender of Accidental Drug Overdose',
      description: 'Marion County Deaths &amp; Population (2010-2018)'
    },
    {
      path: '/vis4-combined-visualization',
      title: 'Accidental Drug Overdose Deaths',
      description: 'Marion County by Substance, Sex, &amp; Age (2010-2018)'
    },
    {
      path: '/vis5-opioid-trajectories',
      title: 'Opioid Death Datasets',
      description: 'Marion County by History of Opioid Prescription, Previous Overdose, Incarceration, Health Data (2010-2018)'
    }
  ];

  menuOpen = false;
  buildDate = buildInfo.buildDate;

  constructor(foo: ScrollDispatcher, router: Router) {
    router.events.subscribe(event => {
      this.menuOpen = false;
    });
  }
}
