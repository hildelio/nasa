import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaEventListComponent } from './nasa-event-list.component';

describe('NasaEventListComponent', () => {
  let component: NasaEventListComponent;
  let fixture: ComponentFixture<NasaEventListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NasaEventListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NasaEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
