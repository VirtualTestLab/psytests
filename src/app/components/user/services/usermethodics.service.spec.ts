import { TestBed, inject } from '@angular/core/testing';

import { UserMethodicsService } from './usermethodics.service';

describe('UserMethodicsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserMethodicsService]
    });
  });

  it('should be created', inject([UserMethodicsService], (service: UserMethodicsService) => {
    expect(service).toBeTruthy();
  }));
});
