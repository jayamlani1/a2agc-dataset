import { Component, HostBinding } from '@angular/core';


@Component({
  selector: 'agc-geomap',
  templateUrl: './geomap.component.html',
  styleUrls: ['./geomap.component.scss']
})
export class GeomapComponent {
  @HostBinding('class') readonly clsName = 'agc-geomap';
}
