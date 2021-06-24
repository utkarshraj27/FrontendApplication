import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingacknowledgementComponent } from './bookingacknowledgement.component';

describe('BookingacknowledgementComponent', () => {
  let component: BookingacknowledgementComponent;
  let fixture: ComponentFixture<BookingacknowledgementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingacknowledgementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingacknowledgementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
