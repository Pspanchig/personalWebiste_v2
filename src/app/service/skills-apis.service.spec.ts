import { TestBed } from '@angular/core/testing';

import { SkillsApisService } from './skills-apis.service';

describe('SkillsApisService', () => {
  let service: SkillsApisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillsApisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
