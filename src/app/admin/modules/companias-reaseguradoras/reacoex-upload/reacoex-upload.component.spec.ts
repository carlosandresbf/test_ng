import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReacoexUploadComponent } from './reacoex-upload.component';

describe('ReacoexUploadComponent', () => {
  let component: ReacoexUploadComponent;
  let fixture: ComponentFixture<ReacoexUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReacoexUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReacoexUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
