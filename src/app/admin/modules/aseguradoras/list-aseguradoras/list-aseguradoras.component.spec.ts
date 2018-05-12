import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAseguradorasComponent } from './list-aseguradoras.component';

describe('ListAseguradorasComponent', () => {
  let component: ListAseguradorasComponent;
  let fixture: ComponentFixture<ListAseguradorasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAseguradorasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAseguradorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
