import { TestBed } from '@angular/core/testing';

import { SearchMealServiceService } from './search-meal-service.service';

describe('SearchMealServiceService', () => {
  let service: SearchMealServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchMealServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
