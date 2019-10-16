import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerDashboardDialogComponent } from './employer-dashboard-dialog.component';

describe('EmployerDashboardDialogComponent', () => {
  let component: EmployerDashboardDialogComponent;
  let fixture: ComponentFixture<EmployerDashboardDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerDashboardDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerDashboardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
