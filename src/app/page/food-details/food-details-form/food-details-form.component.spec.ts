import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDetailsFormComponent } from './food-details-form.component';

describe('FoodDetailsFormComponent', () => {
  let component: FoodDetailsFormComponent;
  let fixture: ComponentFixture<FoodDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodDetailsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
