import { TestBed, inject } from '@angular/core/testing';

import { DailiesService } from './dailies.service';

describe('DailiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DailiesService]
    });
  });

  it('should be created', inject([DailiesService], (service: DailiesService) => {
    expect(service).toBeTruthy();
  }));
});
