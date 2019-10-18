import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerDashboardViewstudentDialogComponent } from './employer-dashboard-viewstudent-dialog.component';

describe('EmployerDashboardViewstudentDialogComponent', () => {
  let component: EmployerDashboardViewstudentDialogComponent;
  let fixture: ComponentFixture<EmployerDashboardViewstudentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerDashboardViewstudentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerDashboardViewstudentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
