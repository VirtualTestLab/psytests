import { TestBed, inject } from '@angular/core/testing';

import { MethodicsmanageService } from './methodicsmanage.service';

describe('MethodicsmanageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MethodicsmanageService]
    });
  });

  it('should be created', inject([MethodicsmanageService], (service: MethodicsmanageService) => {
    expect(service).toBeTruthy();
  }));
});
