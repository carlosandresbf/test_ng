import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TentPlanDetalleComponent } from './tent-plan-detalle.component';

describe('TentPlanDetalleComponent', () => {
  let component: TentPlanDetalleComponent;
  let fixture: ComponentFixture<TentPlanDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TentPlanDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TentPlanDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
