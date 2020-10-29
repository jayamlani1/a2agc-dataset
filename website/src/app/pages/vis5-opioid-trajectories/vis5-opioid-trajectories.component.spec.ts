import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vis5OpioidTrajectoriesComponent } from './vis5-opioid-trajectories.component';

describe('Vis5OpioidTrajectoriesComponent', () => {
  let component: Vis5OpioidTrajectoriesComponent;
  let fixture: ComponentFixture<Vis5OpioidTrajectoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vis5OpioidTrajectoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vis5OpioidTrajectoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
