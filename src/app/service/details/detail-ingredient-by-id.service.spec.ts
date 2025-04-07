import { TestBed } from '@angular/core/testing';

import { DetailIngredientByIdService } from './detail-ingredient-by-id.service';

describe('DetailIngredientByIdService', () => {
  let service: DetailIngredientByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailIngredientByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
