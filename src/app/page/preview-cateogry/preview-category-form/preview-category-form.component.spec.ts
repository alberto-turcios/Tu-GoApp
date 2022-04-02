import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewCategoryFormComponent } from './preview-category-form.component';

describe('PreviewCategoryFormComponent', () => {
  let component: PreviewCategoryFormComponent;
  let fixture: ComponentFixture<PreviewCategoryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewCategoryFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewCategoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
