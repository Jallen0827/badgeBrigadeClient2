import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndeedSearchComponent } from './indeed-search.component';

describe('IndeedSearchComponent', () => {
  let component: IndeedSearchComponent;
  let fixture: ComponentFixture<IndeedSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndeedSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndeedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
