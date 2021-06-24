import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetProductbyidComponent } from './get-productbyid.component';

describe('GetProductbyidComponent', () => {
  let component: GetProductbyidComponent;
  let fixture: ComponentFixture<GetProductbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetProductbyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetProductbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
