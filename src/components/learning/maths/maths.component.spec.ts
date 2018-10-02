import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { mathsComponent } from './maths.component';

describe('NavComponent', () => {
  let component: mathsComponent;
  let fixture: ComponentFixture<mathsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ mathsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(mathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
