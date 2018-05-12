import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomaticosListComponent } from './automaticos-list.component';

describe('AutomaticosListComponent', () => {
  let component: AutomaticosListComponent;
  let fixture: ComponentFixture<AutomaticosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomaticosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomaticosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
