import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjusteNoProporcionalesComponent } from './ajuste-no-proporcionales.component';

describe('AjusteNoProporcionalesComponent', () => {
  let component: AjusteNoProporcionalesComponent;
  let fixture: ComponentFixture<AjusteNoProporcionalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjusteNoProporcionalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjusteNoProporcionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
