import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSchemaBrowserComponent } from './data-schema-browser.component';

describe('DataSchemaBrowserComponent', () => {
  let component: DataSchemaBrowserComponent;
  let fixture: ComponentFixture<DataSchemaBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataSchemaBrowserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSchemaBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
