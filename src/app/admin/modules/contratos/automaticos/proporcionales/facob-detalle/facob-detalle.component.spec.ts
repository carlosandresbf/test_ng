import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacobDetalleComponent } from './facob-detalle.component';

describe('FacobDetalleComponent', () => {
  let component: FacobDetalleComponent;
  let fixture: ComponentFixture<FacobDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacobDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacobDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
