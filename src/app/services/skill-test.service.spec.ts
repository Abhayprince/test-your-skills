import { TestBed } from '@angular/core/testing';

import { SkillTestService } from './skill-test.service';

describe('SkillTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SkillTestService = TestBed.get(SkillTestService);
    expect(service).toBeTruthy();
  });
});
