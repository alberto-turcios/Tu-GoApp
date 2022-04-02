import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodRatingsComponent } from './food-ratings.component';

describe('FoodRatingsComponent', () => {
  let component: FoodRatingsComponent;
  let fixture: ComponentFixture<FoodRatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodRatingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
