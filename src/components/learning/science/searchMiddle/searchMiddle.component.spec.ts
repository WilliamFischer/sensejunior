import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { searchMiddleComponent } from './searchMiddle.component';

describe('NavComponent', () => {
  let component: searchMiddleComponent;
  let fixture: ComponentFixture<searchMiddleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ searchMiddleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(searchMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
