import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarSystemPlanetsComponent } from './solar-system-planets.component';

describe('SolarSystemPlanetsComponent', () => {
  let component: SolarSystemPlanetsComponent;
  let fixture: ComponentFixture<SolarSystemPlanetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SolarSystemPlanetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolarSystemPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
