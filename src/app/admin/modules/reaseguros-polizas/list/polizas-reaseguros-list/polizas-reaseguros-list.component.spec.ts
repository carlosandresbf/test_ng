import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizasReasegurosListComponent } from './polizas-reaseguros-list.component';

describe('PolizasReasegurosListComponent', () => {
  let component: PolizasReasegurosListComponent;
  let fixture: ComponentFixture<PolizasReasegurosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolizasReasegurosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolizasReasegurosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
