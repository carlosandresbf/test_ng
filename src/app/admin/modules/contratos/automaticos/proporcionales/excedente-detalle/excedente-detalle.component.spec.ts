import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcedenteDetalleComponent } from './excedente-detalle.component';

describe('ExcedenteDetalleComponent', () => {
  let component: ExcedenteDetalleComponent;
  let fixture: ComponentFixture<ExcedenteDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcedenteDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcedenteDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
