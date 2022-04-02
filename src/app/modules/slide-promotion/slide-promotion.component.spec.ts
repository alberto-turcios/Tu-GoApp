import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidePromotionComponent } from './slide-promotion.component';

describe('SlidePromotionComponent', () => {
  let component: SlidePromotionComponent;
  let fixture: ComponentFixture<SlidePromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidePromotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidePromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
