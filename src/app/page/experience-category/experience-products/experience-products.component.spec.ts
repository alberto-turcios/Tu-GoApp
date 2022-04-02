import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceProductsComponent } from './experience-products.component';

describe('ExperienceProductsComponent', () => {
  let component: ExperienceProductsComponent;
  let fixture: ComponentFixture<ExperienceProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
