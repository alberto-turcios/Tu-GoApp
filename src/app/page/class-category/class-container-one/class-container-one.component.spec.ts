import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassContainerOneComponent } from './class-container-one.component';

describe('ClassContainerOneComponent', () => {
  let component: ClassContainerOneComponent;
  let fixture: ComponentFixture<ClassContainerOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassContainerOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassContainerOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
