import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarCorredorComponent } from './registrar-corredor.component';

describe('RegistrarCorredorComponent', () => {
  let component: RegistrarCorredorComponent;
  let fixture: ComponentFixture<RegistrarCorredorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarCorredorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarCorredorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
