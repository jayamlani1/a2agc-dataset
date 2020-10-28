import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vis4CombinedVisualizationComponent } from './vis4-combined-visualization.component';

describe('Vis4CombinedVisualizationComponent', () => {
  let component: Vis4CombinedVisualizationComponent;
  let fixture: ComponentFixture<Vis4CombinedVisualizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vis4CombinedVisualizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vis4CombinedVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
