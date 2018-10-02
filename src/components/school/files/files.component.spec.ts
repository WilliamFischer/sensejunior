import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { schoolFilesComponent } from './files.component';

describe('NavComponent', () => {
  let component: schoolFilesComponent;
  let fixture: ComponentFixture<schoolFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ schoolFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(schoolFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
