import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuotaAparteDetalleComponent } from './cuota-aparte-detalle.component';

describe('CuotaAparteDetalleComponent', () => {
  let component: CuotaAparteDetalleComponent;
  let fixture: ComponentFixture<CuotaAparteDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuotaAparteDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuotaAparteDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
