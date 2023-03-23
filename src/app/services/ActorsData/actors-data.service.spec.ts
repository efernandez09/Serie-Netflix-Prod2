import { TestBed } from '@angular/core/testing';

import { ActorsDataService } from './actors-data.service';

describe('ActorsDataService', () => {
  let service: ActorsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActorsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
