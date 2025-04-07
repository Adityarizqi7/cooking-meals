import { TestBed } from '@angular/core/testing';

import { DetailIngredientServiceService } from './detail-ingredient-service.service';

describe('DetailIngredientServiceService', () => {
  let service: DetailIngredientServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailIngredientServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
