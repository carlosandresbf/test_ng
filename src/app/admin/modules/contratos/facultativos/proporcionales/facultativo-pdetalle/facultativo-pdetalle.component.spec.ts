import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultativoPdetalleComponent } from './facultativo-pdetalle.component';

describe('FacultativoPdetalleComponent', () => {
  let component: FacultativoPdetalleComponent;
  let fixture: ComponentFixture<FacultativoPdetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultativoPdetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultativoPdetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
