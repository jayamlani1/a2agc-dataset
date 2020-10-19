import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';


@Component({
  selector: 'agc-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageHeaderComponent {
  @HostBinding('class') readonly clsName = 'agc-page-header';
}
