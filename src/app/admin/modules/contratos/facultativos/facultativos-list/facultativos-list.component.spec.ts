import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultativosListComponent } from './facultativos-list.component';

describe('FacultativosListComponent', () => {
  let component: FacultativosListComponent;
  let fixture: ComponentFixture<FacultativosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultativosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultativosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
