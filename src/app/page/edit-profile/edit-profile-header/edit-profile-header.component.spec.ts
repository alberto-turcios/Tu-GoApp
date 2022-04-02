import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileHeaderComponent } from './edit-profile-header.component';

describe('EditProfileHeaderComponent', () => {
  let component: EditProfileHeaderComponent;
  let fixture: ComponentFixture<EditProfileHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfileHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
