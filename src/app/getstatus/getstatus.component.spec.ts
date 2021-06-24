import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetstatusComponent } from './getstatus.component';

describe('GetstatusComponent', () => {
  let component: GetstatusComponent;
  let fixture: ComponentFixture<GetstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
