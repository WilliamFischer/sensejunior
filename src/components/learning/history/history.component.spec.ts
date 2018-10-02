import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { historyComponent } from './history.component';

describe('NavComponent', () => {
  let component: historyComponent;
  let fixture: ComponentFixture<historyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ historyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(historyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
