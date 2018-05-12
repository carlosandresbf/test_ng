import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniasReaseguradorasListComponent } from './companias-reaseguradoras-list.component';

describe('CompaniasReaseguradorasListComponent', () => {
  let component: CompaniasReaseguradorasListComponent;
  let fixture: ComponentFixture<CompaniasReaseguradorasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniasReaseguradorasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniasReaseguradorasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
