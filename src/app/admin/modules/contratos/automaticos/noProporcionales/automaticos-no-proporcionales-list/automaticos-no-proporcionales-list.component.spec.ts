import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomaticosNoProporcionalesListComponent } from './automaticos-no-proporcionales-list.component';

describe('AutomaticosNoProporcionalesListComponent', () => {
  let component: AutomaticosNoProporcionalesListComponent;
  let fixture: ComponentFixture<AutomaticosNoProporcionalesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomaticosNoProporcionalesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomaticosNoProporcionalesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
