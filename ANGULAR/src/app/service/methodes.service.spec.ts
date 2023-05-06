import { TestBed } from '@angular/core/testing';

import { MethodesService } from './methodes.service';

describe('MethodesService', () => {
  let service: MethodesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MethodesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
