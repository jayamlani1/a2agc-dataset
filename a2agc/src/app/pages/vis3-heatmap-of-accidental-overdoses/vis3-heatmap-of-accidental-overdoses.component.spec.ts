import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vis3HeatmapOfAccidentalOverdosesComponent } from './vis3-heatmap-of-accidental-overdoses.component';

describe('Vis3HeatmapOfAccidentalOverdosesComponent', () => {
  let component: Vis3HeatmapOfAccidentalOverdosesComponent;
  let fixture: ComponentFixture<Vis3HeatmapOfAccidentalOverdosesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vis3HeatmapOfAccidentalOverdosesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vis3HeatmapOfAccidentalOverdosesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
