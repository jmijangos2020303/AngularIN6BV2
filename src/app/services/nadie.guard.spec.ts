import { TestBed } from '@angular/core/testing';

import { NadieGuard } from './nadie.guard';

describe('NadieGuard', () => {
  let guard: NadieGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NadieGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
