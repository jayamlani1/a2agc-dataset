import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';


export interface PageLink {
  path: string;
  title: string;
  description: string;
}


@Component({
  selector: 'agc-page-menu',
  templateUrl: './page-menu.component.html',
  styleUrls: ['./page-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageMenuComponent {
  @HostBinding('class') readonly clsName = 'agc-page-menu';

  @Input() header = '';
  @Input() pages: PageLink[] = [];
}
