import { ScrollDispatcher } from '@angular/cdk/overlay';
import { Component, HostBinding } from '@angular/core';

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
      path: '/geomap',
      title: 'Geomap',
      description: 'A geomap'
    }
  ];

  menuOpen = false;

  constructor(foo: ScrollDispatcher) {
    // console.log(foo);
  }

  // TODO on navigation close menu!
}
