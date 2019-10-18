import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerDashboardUpdateDialogComponent } from './employer-dashboard-update-dialog.component';

describe('EmployerDashboardUpdateDialogComponent', () => {
  let component: EmployerDashboardUpdateDialogComponent;
  let fixture: ComponentFixture<EmployerDashboardUpdateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerDashboardUpdateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerDashboardUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
