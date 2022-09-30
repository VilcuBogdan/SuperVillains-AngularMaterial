import { TestBed } from '@angular/core/testing';

import { VillainStoreService } from './villain-store.service';

describe('VillainStoreService', () => {
  let service: VillainStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VillainStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
