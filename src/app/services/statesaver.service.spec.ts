import { TestBed, inject } from '@angular/core/testing';

import { StateSaverService } from './statesaver.service';

describe('StateSaverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StateSaverService]
    });
  });

  it('should be created', inject([StateSaverService], (service: StateSaverService) => {
    expect(service).toBeTruthy();
  }));
});
