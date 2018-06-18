import { TestBed, inject } from '@angular/core/testing';

import { AdminmethodicsService } from './adminmethodics.service';

describe('AdminmethodicsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminmethodicsService]
    });
  });

  it('should be created', inject([AdminmethodicsService], (service: AdminmethodicsService) => {
    expect(service).toBeTruthy();
  }));
});
