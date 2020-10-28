import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vis2AgeAndGenderComponent } from './vis2-age-and-gender.component';

describe('Vis2AgeAndGenderComponent', () => {
  let component: Vis2AgeAndGenderComponent;
  let fixture: ComponentFixture<Vis2AgeAndGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vis2AgeAndGenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vis2AgeAndGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
