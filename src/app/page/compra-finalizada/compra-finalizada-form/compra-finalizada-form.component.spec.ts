import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraFinalizadaFormComponent } from './compra-finalizada-form.component';

describe('CompraFinalizadaFormComponent', () => {
  let component: CompraFinalizadaFormComponent;
  let fixture: ComponentFixture<CompraFinalizadaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraFinalizadaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraFinalizadaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
