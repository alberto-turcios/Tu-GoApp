import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaArtesaniasComponent } from './tienda-artesanias.component';

describe('TiendaArtesaniasComponent', () => {
  let component: TiendaArtesaniasComponent;
  let fixture: ComponentFixture<TiendaArtesaniasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendaArtesaniasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaArtesaniasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
