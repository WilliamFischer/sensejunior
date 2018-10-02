import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { scienceComponent } from './science.component';

describe('NavComponent', () => {
  let component: scienceComponent;
  let fixture: ComponentFixture<scienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ scienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(scienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
