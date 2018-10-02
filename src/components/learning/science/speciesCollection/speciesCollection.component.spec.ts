import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { speciesCollectionComponent } from './speciesCollection.component';

describe('NavComponent', () => {
  let component: speciesCollectionComponent;
  let fixture: ComponentFixture<speciesCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ speciesCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(speciesCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
