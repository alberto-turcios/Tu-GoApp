import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarPagoFormComponent } from './confirmar-pago-form.component';

describe('ConfirmarPagoFormComponent', () => {
  let component: ConfirmarPagoFormComponent;
  let fixture: ComponentFixture<ConfirmarPagoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmarPagoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarPagoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
