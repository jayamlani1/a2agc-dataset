import { Component, HostBinding, Input } from '@angular/core';
import { Spec } from 'ngx-vega';
import { MatDialog } from '@angular/material/dialog';

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
  @Input() content?: string;
  @Input() sql?: string;

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
