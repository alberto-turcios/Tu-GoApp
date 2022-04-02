import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassContainerTwoComponent } from './class-container-two.component';

describe('ClassContainerTwoComponent', () => {
  let component: ClassContainerTwoComponent;
  let fixture: ComponentFixture<ClassContainerTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassContainerTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassContainerTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
