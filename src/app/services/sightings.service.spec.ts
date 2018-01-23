import { TestBed, inject } from '@angular/core/testing';

import { SightingsService } from './sightings.service';

describe('SightingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SightingsService]
    });
  });

  it('should be created', inject([SightingsService], (service: SightingsService) => {
    expect(service).toBeTruthy();
  }));
});
