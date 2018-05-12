import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultativosProporcionalesListComponent } from './facultativos-proporcionales-list.component';

describe('FacultativosProporcionalesListComponent', () => {
  let component: FacultativosProporcionalesListComponent;
  let fixture: ComponentFixture<FacultativosProporcionalesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultativosProporcionalesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultativosProporcionalesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
