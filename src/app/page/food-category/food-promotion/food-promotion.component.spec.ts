import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodPromotionComponent } from './food-promotion.component';

describe('FoodPromotionComponent', () => {
  let component: FoodPromotionComponent;
  let fixture: ComponentFixture<FoodPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodPromotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
