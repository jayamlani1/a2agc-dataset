import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataErDiagramComponent } from './data-er-diagram.component';

describe('DataErDiagramComponent', () => {
  let component: DataErDiagramComponent;
  let fixture: ComponentFixture<DataErDiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataErDiagramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataErDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
