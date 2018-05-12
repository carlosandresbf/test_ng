import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjusteSobreComisionComponent } from './ajuste-sobre-comision.component';

describe('AjusteSobreComisionComponent', () => {
  let component: AjusteSobreComisionComponent;
  let fixture: ComponentFixture<AjusteSobreComisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjusteSobreComisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjusteSobreComisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
