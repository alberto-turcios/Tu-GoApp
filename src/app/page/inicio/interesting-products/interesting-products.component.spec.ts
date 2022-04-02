import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestingProductsComponent } from './interesting-products.component';

describe('InterestingProductsComponent', () => {
  let component: InterestingProductsComponent;
  let fixture: ComponentFixture<InterestingProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestingProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestingProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
