import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratosNewComponent } from './contratos-new.component';

describe('ContratosNewComponent', () => {
  let component: ContratosNewComponent;
  let fixture: ComponentFixture<ContratosNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratosNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratosNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
