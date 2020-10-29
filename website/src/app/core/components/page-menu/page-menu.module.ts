import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { PageMenuComponent } from './page-menu.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    MatDividerModule,
    MatIconModule
  ],
  declarations: [PageMenuComponent],
  exports: [PageMenuComponent]
})
export class PageMenuModule { }
