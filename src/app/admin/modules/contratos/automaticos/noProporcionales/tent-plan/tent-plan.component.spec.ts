import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TentPlanComponent } from './tent-plan.component';

describe('TentPlanComponent', () => {
  let component: TentPlanComponent;
  let fixture: ComponentFixture<TentPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TentPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TentPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
