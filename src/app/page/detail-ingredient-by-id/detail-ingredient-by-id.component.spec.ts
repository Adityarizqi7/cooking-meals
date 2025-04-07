import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailIngredientByIdComponent } from './detail-ingredient-by-id.component';

describe('DetailIngredientByIdComponent', () => {
  let component: DetailIngredientByIdComponent;
  let fixture: ComponentFixture<DetailIngredientByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailIngredientByIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailIngredientByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
