import { TestBed } from '@angular/core/testing';

import { CheckLoginImplementsCanActivateGuard } from './check-login---implements-can-activate.guard';

describe('CheckLoginImplementsCanActivateGuard', () => {
  let guard: CheckLoginImplementsCanActivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckLoginImplementsCanActivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
