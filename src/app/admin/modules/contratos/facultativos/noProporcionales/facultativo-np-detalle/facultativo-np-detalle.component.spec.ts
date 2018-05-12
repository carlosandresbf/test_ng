import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultativoNpDetalleComponent } from './facultativo-np-detalle.component';

describe('FacultativoNpDetalleComponent', () => {
  let component: FacultativoNpDetalleComponent;
  let fixture: ComponentFixture<FacultativoNpDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultativoNpDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultativoNpDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
