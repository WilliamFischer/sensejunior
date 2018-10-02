import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMiddleComponent } from './homeMiddle.component';

describe('NavComponent', () => {
  let component: HomeMiddleComponent;
  let fixture: ComponentFixture<HomeMiddleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMiddleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
