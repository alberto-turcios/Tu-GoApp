import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileCreditCardComponent } from './edit-profile-credit-card.component';

describe('EditProfileCreditCardComponent', () => {
  let component: EditProfileCreditCardComponent;
  let fixture: ComponentFixture<EditProfileCreditCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfileCreditCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileCreditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
