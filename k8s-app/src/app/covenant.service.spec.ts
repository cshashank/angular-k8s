import { TestBed } from '@angular/core/testing';

import { CovenantService } from './covenant.service';

describe('CovenantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CovenantService = TestBed.get(CovenantService);
    expect(service).toBeTruthy();
  });
});
