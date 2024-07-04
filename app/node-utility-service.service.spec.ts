import { TestBed } from '@angular/core/testing';

import { NodeUtilityServiceService } from './node-utility-service.service';

describe('NodeUtilityServiceService', () => {
  let service: NodeUtilityServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodeUtilityServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
