import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { schoolHomeComponent } from './home.component';

describe('NavComponent', () => {
  let component: schoolHomeComponent;
  let fixture: ComponentFixture<schoolHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ schoolHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(schoolHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
