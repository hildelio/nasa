import { TestBed } from '@angular/core/testing';

import { NasaEonetService } from './nasa-eonet.service';

describe('NasaEonetService', () => {
  let service: NasaEonetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NasaEonetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
