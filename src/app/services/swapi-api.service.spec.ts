import { TestBed } from '@angular/core/testing';

import { SwapiApiService } from './swapi-api.service';

describe('SwapiApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwapiApiService = TestBed.get(SwapiApiService);
    expect(service).toBeTruthy();
  });
});
