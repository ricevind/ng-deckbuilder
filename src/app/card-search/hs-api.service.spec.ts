import { TestBed, inject } from '@angular/core/testing';

import { HsApiService } from './hs-api.service';

describe('HsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HsApiService]
    });
  });

  it('should ...', inject([HsApiService], (service: HsApiService) => {
    expect(service).toBeTruthy();
  }));
});
