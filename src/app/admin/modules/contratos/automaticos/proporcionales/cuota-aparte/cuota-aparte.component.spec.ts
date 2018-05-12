import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuotaAparteComponent } from './cuota-aparte.component';

describe('CuotaAparteComponent', () => {
  let component: CuotaAparteComponent;
  let fixture: ComponentFixture<CuotaAparteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuotaAparteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuotaAparteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
