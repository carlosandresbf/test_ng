import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacobComponent } from './facob.component';

describe('FacobComponent', () => {
  let component: FacobComponent;
  let fixture: ComponentFixture<FacobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
