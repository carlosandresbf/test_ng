import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomaticosProporcionalesListComponent } from './automaticos-proporcionales-list.component';

describe('AutomaticosProporcionalesListComponent', () => {
  let component: AutomaticosProporcionalesListComponent;
  let fixture: ComponentFixture<AutomaticosProporcionalesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomaticosProporcionalesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomaticosProporcionalesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
