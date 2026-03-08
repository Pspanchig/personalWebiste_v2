import { TestBed } from '@angular/core/testing';

import { CertsApisService } from './certs-apis.service';

describe('CertsApisService', () => {
  let service: CertsApisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertsApisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
