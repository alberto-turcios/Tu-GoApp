import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodButtomComponent } from './food-buttom.component';

describe('FoodButtomComponent', () => {
  let component: FoodButtomComponent;
  let fixture: ComponentFixture<FoodButtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodButtomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodButtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
