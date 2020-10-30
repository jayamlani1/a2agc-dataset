import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'agc-data-er-diagram',
  templateUrl: './data-er-diagram.component.html',
  styleUrls: ['./data-er-diagram.component.scss']
})
export class DataErDiagramComponent implements OnInit {
  @HostBinding('class') readonly clsName = 'data-er-diagram';

  constructor() { }

  ngOnInit(): void {
  }

}
