import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarReaseguradorComponent } from './registrar-reasegurador.component';

describe('RegistrarReaseguradorComponent', () => {
  let component: RegistrarReaseguradorComponent;
  let fixture: ComponentFixture<RegistrarReaseguradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarReaseguradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarReaseguradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
