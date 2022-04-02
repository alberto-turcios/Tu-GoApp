import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewCateogryComponent } from './preview-cateogry.component';

describe('PreviewCateogryComponent', () => {
  let component: PreviewCateogryComponent;
  let fixture: ComponentFixture<PreviewCateogryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewCateogryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewCateogryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
