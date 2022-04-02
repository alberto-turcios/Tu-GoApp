import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaComidaComponent } from './tienda-comida.component';

describe('TiendaComidaComponent', () => {
  let component: TiendaComidaComponent;
  let fixture: ComponentFixture<TiendaComidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendaComidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaComidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
