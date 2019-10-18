import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerDashboardDeleteDialogComponent } from './employer-dashboard-delete-dialog.component';

describe('EmployerDashboardDeleteDialogComponent', () => {
  let component: EmployerDashboardDeleteDialogComponent;
  let fixture: ComponentFixture<EmployerDashboardDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerDashboardDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerDashboardDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
