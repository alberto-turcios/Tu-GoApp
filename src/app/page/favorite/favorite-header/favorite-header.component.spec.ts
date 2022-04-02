import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteHeaderComponent } from './favorite-header.component';

describe('FavoriteHeaderComponent', () => {
  let component: FavoriteHeaderComponent;
  let fixture: ComponentFixture<FavoriteHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
