import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassSlideComponent } from './class-slide.component';

describe('ClassSlideComponent', () => {
  let component: ClassSlideComponent;
  let fixture: ComponentFixture<ClassSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
