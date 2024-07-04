import { TestBed } from '@angular/core/testing';

import { NodeutilityService } from './nodeutility.service';

describe('NodeutilityService', () => {
  let service: NodeutilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodeutilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
