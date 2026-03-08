import { TestBed } from '@angular/core/testing';

import { EduactionApisService } from './eduaction-apis.service';

describe('EduactionApisService', () => {
  let service: EduactionApisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EduactionApisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
