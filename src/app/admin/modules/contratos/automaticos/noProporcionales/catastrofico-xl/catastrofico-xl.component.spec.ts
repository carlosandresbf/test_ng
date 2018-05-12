import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatastroficoXlComponent } from './catastrofico-xl.component';

describe('CatastroficoXlComponent', () => {
  let component: CatastroficoXlComponent;
  let fixture: ComponentFixture<CatastroficoXlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatastroficoXlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatastroficoXlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
