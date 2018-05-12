import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatastroficoXlDetalleComponent } from './catastrofico-xl-detalle.component';

describe('CatastroficoXlDetalleComponent', () => {
  let component: CatastroficoXlDetalleComponent;
  let fixture: ComponentFixture<CatastroficoXlDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatastroficoXlDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatastroficoXlDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
