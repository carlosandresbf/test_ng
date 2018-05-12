import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultativoNpComponent } from './facultativo-np.component';

describe('FacultativoNpComponent', () => {
  let component: FacultativoNpComponent;
  let fixture: ComponentFixture<FacultativoNpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultativoNpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultativoNpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
