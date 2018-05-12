import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperativoWxlDetalleComponent } from './operativo-wxl-detalle.component';

describe('OperativoWxlDetalleComponent', () => {
  let component: OperativoWxlDetalleComponent;
  let fixture: ComponentFixture<OperativoWxlDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperativoWxlDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperativoWxlDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
