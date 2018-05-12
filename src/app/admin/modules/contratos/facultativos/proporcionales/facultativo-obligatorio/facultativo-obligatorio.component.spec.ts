import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultativoObligatorioComponent } from './facultativo-obligatorio.component';

describe('FacultativoObligatorioComponent', () => {
  let component: FacultativoObligatorioComponent;
  let fixture: ComponentFixture<FacultativoObligatorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultativoObligatorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultativoObligatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
