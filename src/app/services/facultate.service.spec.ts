import { TestBed } from '@angular/core/testing';

import { FacultateService } from './facultate.service';

describe('FacultateService', () => {
  let service: FacultateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacultateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
