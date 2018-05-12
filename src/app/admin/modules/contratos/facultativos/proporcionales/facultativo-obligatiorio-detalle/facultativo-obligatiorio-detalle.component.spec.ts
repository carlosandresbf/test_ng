import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultativoObligatiorioDetalleComponent } from './facultativo-obligatiorio-detalle.component';

describe('FacultativoObligatiorioDetalleComponent', () => {
  let component: FacultativoObligatiorioDetalleComponent;
  let fixture: ComponentFixture<FacultativoObligatiorioDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultativoObligatiorioDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultativoObligatiorioDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
