import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vis1GeomapOfOpioidDeathsComponent } from './vis1-geomap-of-opioid-deaths.component';

describe('Vis1GeomapOfOpioidDeathsComponent', () => {
  let component: Vis1GeomapOfOpioidDeathsComponent;
  let fixture: ComponentFixture<Vis1GeomapOfOpioidDeathsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vis1GeomapOfOpioidDeathsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vis1GeomapOfOpioidDeathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
