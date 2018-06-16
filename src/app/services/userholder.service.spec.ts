import { TestBed, inject } from '@angular/core/testing';

import { UserHolderService } from './userholder.service';

describe('UserHolderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserHolderService]
    });
  });

  it('should be created', inject([UserHolderService], (service: UserHolderService) => {
    expect(service).toBeTruthy();
  }));
});
