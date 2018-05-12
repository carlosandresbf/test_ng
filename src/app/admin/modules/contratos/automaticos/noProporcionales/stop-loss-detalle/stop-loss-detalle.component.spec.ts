import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopLossDetalleComponent } from './stop-loss-detalle.component';

describe('StopLossDetalleComponent', () => {
  let component: StopLossDetalleComponent;
  let fixture: ComponentFixture<StopLossDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopLossDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopLossDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
