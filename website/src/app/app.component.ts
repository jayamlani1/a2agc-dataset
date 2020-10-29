import { AfterViewInit, Component, HostBinding, NgZone, ViewChild } from '@angular/core';
import { MatSidenavContainer } from '@angular/material/sidenav';

import { buildInfo } from './build-info';
import { PageLink } from './core/models/pages.model';
import { RouterState } from './core/state/router/router.state';


@Component({
  selector: 'agc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @HostBinding('class') readonly clsName = 'agc-root';

  @ViewChild(MatSidenavContainer)
  readonly sidenavContainer!: MatSidenavContainer;

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

  subBarVisible = true;
  menuOpen = false;
  buildDate = buildInfo.buildDate;

  constructor(
    router: RouterState,
    private readonly zone: NgZone
  ) {
    router.navigationStart$.subscribe(() => {
      this.menuOpen = false;
    });
  }

  ngAfterViewInit(): void {
    // NOTE: Scrollable is not available in ngOnInit even if @ViewChild has `static: true`
    this.sidenavContainer.scrollable.elementScrolled().subscribe(() => {
      // NOTE: This runs outside angular's zone
      // ALL modifications must be wrapped in calls to `this.zone.run` or related methods
      const offset = this.sidenavContainer.scrollable.measureScrollOffset('top');
      const visible = offset === 0;
      if (this.subBarVisible !== visible) {
        this.zone.run(() => {
          this.subBarVisible = visible;
        });
      }
    });
  }
}
