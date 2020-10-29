import { AfterViewInit, Component, HostBinding, NgZone, ViewChild } from '@angular/core';
import { MatSidenavContainer } from '@angular/material/sidenav';

import { PageLink } from './core/components/page-menu/page-menu.component';


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
      path: '/geomap',
      title: 'Geomap',
      description: 'A geomap'
    }
  ];

  subBarVisible = true;
  menuOpen = false;

  constructor(private readonly zone: NgZone) {}

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

  // TODO on navigation close menu!
}
