import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AseguradorasUploadComponent } from './aseguradoras-upload.component';

describe('AseguradorasUploadComponent', () => {
  let component: AseguradorasUploadComponent;
  let fixture: ComponentFixture<AseguradorasUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AseguradorasUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AseguradorasUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
