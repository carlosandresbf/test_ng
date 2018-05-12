import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultativoPComponent } from './facultativo-p.component';

describe('FacultativoPComponent', () => {
  let component: FacultativoPComponent;
  let fixture: ComponentFixture<FacultativoPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultativoPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultativoPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
