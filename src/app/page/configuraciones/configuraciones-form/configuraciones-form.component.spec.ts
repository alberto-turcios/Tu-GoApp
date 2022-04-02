import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionesFormComponent } from './configuraciones-form.component';

describe('ConfiguracionesFormComponent', () => {
  let component: ConfiguracionesFormComponent;
  let fixture: ComponentFixture<ConfiguracionesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracionesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
