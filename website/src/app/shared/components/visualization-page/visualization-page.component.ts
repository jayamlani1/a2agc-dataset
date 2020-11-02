import { Component, HostBinding, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Options, Spec } from 'ngx-vega';

import { HelpModalComponent } from '../help-modal/help-modal.component';


@Component({
  selector: 'agc-visualization-page',
  templateUrl: './visualization-page.component.html',
  styleUrls: ['./visualization-page.component.scss']
})
export class VisualizationPageComponent {
  @HostBinding('class') readonly clsName = 'agc-visualization-page';

  @Input() headline = 'Marion County Opioid Addiction Report';
  @Input() title?: string;
  @Input() description?: string;
  @Input() spec?: Spec;
  @Input() options: Options = { renderer: 'canvas', actions: true };
  @Input() content?: string;
  @Input() sql?: string;
  @Input() csv?: string;

  get specString(): string | undefined {
    return this.spec as string;
  }

  constructor(private readonly dialog: MatDialog) { }

  launchHelpDialog(): void {
    this.dialog.open(HelpModalComponent, {
      width: '60rem',
      data: {}
    });
  }

}
