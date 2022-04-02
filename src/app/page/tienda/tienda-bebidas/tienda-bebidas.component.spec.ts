import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaBebidasComponent } from './tienda-bebidas.component';

describe('TiendaBebidasComponent', () => {
  let component: TiendaBebidasComponent;
  let fixture: ComponentFixture<TiendaBebidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendaBebidasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaBebidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
