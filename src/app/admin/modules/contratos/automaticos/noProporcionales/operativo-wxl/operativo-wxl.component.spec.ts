import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperativoWxlComponent } from './operativo-wxl.component';

describe('OperativoWxlComponent', () => {
  let component: OperativoWxlComponent;
  let fixture: ComponentFixture<OperativoWxlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperativoWxlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperativoWxlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
