import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { subjectsMiddleComponent } from './subjectsMiddle.component';

describe('NavComponent', () => {
  let component: subjectsMiddleComponent;
  let fixture: ComponentFixture<subjectsMiddleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ subjectsMiddleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(subjectsMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
