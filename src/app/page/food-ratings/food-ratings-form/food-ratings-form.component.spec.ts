import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodRatingsFormComponent } from './food-ratings-form.component';

describe('FoodRatingsFormComponent', () => {
  let component: FoodRatingsFormComponent;
  let fixture: ComponentFixture<FoodRatingsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodRatingsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodRatingsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
