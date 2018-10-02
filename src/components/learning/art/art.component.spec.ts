import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { artComponent } from './art.component';

describe('NavComponent', () => {
  let component: artComponent;
  let fixture: ComponentFixture<artComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ artComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(artComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
