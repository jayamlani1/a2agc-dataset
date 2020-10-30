import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'agc-data-schema-browser',
  templateUrl: './data-schema-browser.component.html',
  styleUrls: ['./data-schema-browser.component.scss']
})
export class DataSchemaBrowserComponent implements OnInit {
  @HostBinding('class') readonly clsName = 'data-schema-browser';

  constructor() { }

  ngOnInit(): void {
  }

}
