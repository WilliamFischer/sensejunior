import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { englishComponent } from './english.component';

describe('NavComponent', () => {
  let component: artComponent;
  let fixture: ComponentFixture<englishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ englishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(englishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
