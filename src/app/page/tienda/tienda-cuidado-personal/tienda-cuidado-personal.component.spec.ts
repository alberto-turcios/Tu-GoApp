import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaCuidadoPersonalComponent } from './tienda-cuidado-personal.component';

describe('TiendaCuidadoPersonalComponent', () => {
  let component: TiendaCuidadoPersonalComponent;
  let fixture: ComponentFixture<TiendaCuidadoPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendaCuidadoPersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaCuidadoPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
