import { TestBed } from '@angular/core/testing';

import { StudentsMaterialsService } from './students-materials.service';

describe('StudentsMaterialsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentsMaterialsService = TestBed.get(StudentsMaterialsService);
    expect(service).toBeTruthy();
  });
});
