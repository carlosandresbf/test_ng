import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultativosNoProporcionalesListComponent } from './facultativos-no-proporcionales-list.component';

describe('FacultativosNoProporcionalesListComponent', () => {
  let component: FacultativosNoProporcionalesListComponent;
  let fixture: ComponentFixture<FacultativosNoProporcionalesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultativosNoProporcionalesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultativosNoProporcionalesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
