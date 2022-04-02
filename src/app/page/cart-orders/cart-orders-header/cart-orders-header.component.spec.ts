import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartOrdersHeaderComponent } from './cart-orders-header.component';

describe('CartOrdersHeaderComponent', () => {
  let component: CartOrdersHeaderComponent;
  let fixture: ComponentFixture<CartOrdersHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartOrdersHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartOrdersHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
