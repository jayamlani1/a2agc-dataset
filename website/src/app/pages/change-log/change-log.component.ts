import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'agc-change-log',
  templateUrl: './change-log.component.html',
  styleUrls: ['./change-log.component.scss']
})
export class ChangeLogComponent implements OnInit {
  @HostBinding('class') readonly clsName = 'change-log';

  constructor() { }

  ngOnInit(): void {
  }

}
