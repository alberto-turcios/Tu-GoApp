import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsSlideComponent } from './events-slide.component';

describe('EventsSlideComponent', () => {
  let component: EventsSlideComponent;
  let fixture: ComponentFixture<EventsSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
