import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'agc-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageFooterComponent {
}
