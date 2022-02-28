import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRateComponent } from './modal-rate.component';

describe('ModalRateComponent', () => {
  let component: ModalRateComponent;
  let fixture: ComponentFixture<ModalRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
