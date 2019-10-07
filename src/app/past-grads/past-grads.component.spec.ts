import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastGradsComponent } from './past-grads.component';

describe('PastGradsComponent', () => {
  let component: PastGradsComponent;
  let fixture: ComponentFixture<PastGradsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastGradsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastGradsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
