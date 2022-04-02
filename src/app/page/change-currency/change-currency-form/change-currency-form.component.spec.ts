import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeCurrencyFormComponent } from './change-currency-form.component';

describe('ChangeCurrencyFormComponent', () => {
  let component: ChangeCurrencyFormComponent;
  let fixture: ComponentFixture<ChangeCurrencyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeCurrencyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeCurrencyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
