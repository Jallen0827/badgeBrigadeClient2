import {
  Component, OnInit, Inject, ViewChild, ViewChildren, QueryList, AfterViewInit
} from '@angular/core';
import { AdminDeleteComponent } from '../admin-delete/admin-delete.component';
import { AdminUpdateComponent } from '../admin-update/admin-update.component';
import { EmployerDashboardDeleteDialogComponent } from '../employer-dashboard-delete-dialog/employer-dashboard-delete-dialog.component';
import { EmployerDashboardUpdateDialogComponent } from '../employer-dashboard-update-dialog/employer-dashboard-update-dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatTabsModule, MatTabGroup, MatTab } from '@angular/material/tabs';
import { UserService } from '../../_services/user.service';
import { EmployerService } from '../../_services/employer.service';
import { JobBoardService } from '../../_services/job-board.service';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
// User model
import { User } from '../../_models/user';
import { ThrowStmt } from '@angular/compiler';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export interface Employer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export interface Job {
  id: number;
  job_title: string;
  company_name: string;
  position_summary: string;
  contact_email: string;
}

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})

export class AdminDashboardComponent implements OnInit {
  public students$: any;
  public employers$: any;
  public jobs$: any;
  public focusUser$: any;
  public focusJob$: any;
  public profile$: any;
  public picture: any;
  public mailTo: any;
  public userData: any;

  // Creating Unique DataSources for the MatTable to assign read through. One for Employers and one for Students
  dataSourceStudents;
  dataSourceEmployer;
  // Creating an array of table names for the MatTable to sort through.
  columnsToDisplay = ['id', 'firstName', 'lastName', 'email', 'update', 'delete'];
  // Creating another unique DataSource for the MatTable to read through.
  dataSourceJobs;
  // Creating another array of table names since this table is different than the first.
  jobsColumnsDisplay = ['id', 'job_title', 'company_name', 'position_summary', 'contact_email',  'update', 'delete'];

  constructor(
    public dialog: MatDialog,
    private userService: UserService,
    private employerService: EmployerService,
    private jobsService: JobBoardService,
    ) { }

  ngOnInit() {
    this.getAllUsersAndJobs();

  }

  getAllUsersAndJobs() {
        // Pulling All Students and turning it into an Observable
        this.userService.getAllStudents().subscribe(data => {
          // console.log(data);
          this.dataSourceStudents = new MatTableDataSource<Student>(data);
        });
        // Pulling All Employers and turning it into an Observable
        this.employerService.getAllEmployers().subscribe(data => {
          // console.log(data);
          this.dataSourceEmployer = new MatTableDataSource<Employer>(data);
        });
        // Pulling All Jobs and turning it into an Observable
        this.jobsService.getAllJobs().subscribe(data => {
          // console.log(data);
          this.dataSourceJobs = new MatTableDataSource<Job>(data);
        });
  }

  getUserById(id: number) {
    this.userService.getUserById(id).subscribe(userData => {
      // console.log(userData);
      this.profile$ = userData;
      (this.profile$.data.picture_link != null) ? this.picture = this.profile$.data.picture_link
      : this.picture = '../../../assets/Profile-Default-Img.png';
      (this.profile$.data.email != null) ? this.mailTo = `mailto:${this.profile$.data.email}`
      : this.mailTo = 'Update Email';
    });
    return this.profile$;
  }

  getJobById(id: number) {
    this.jobsService.getJobsById(id).subscribe(jobsData => {
      // console.log(jobsData);
      this.focusJob$ = jobsData;
    });
  }

  adminDeleteDialog(id: number): void {
    const userID = id;
    const dialogRef = this.dialog.open(AdminDeleteComponent, {
      data: { userID }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllUsersAndJobs();
    });
  }

  jobDeleteDialog(jobId: any) {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.height = '25vh';
    // dialogConfig.width = '35vw';
    dialogConfig.data = {jobId};
    const dialogRef = this.dialog.open(EmployerDashboardDeleteDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
    this.getAllUsersAndJobs();
  });
  }

  jobUpdateDialog(job: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = '60vh';
    dialogConfig.width = '35vw';
    dialogConfig.data = {job};
    const dialogRef = this.dialog.open(EmployerDashboardUpdateDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
    this.getAllUsersAndJobs();
    });
  }

  adminUpdateDialog(id: number): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = '90vh';
    dialogConfig.width = '80vw';
    dialogConfig.data = id;
    const dialogRef = this.dialog.open(AdminUpdateComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      this.getAllUsersAndJobs();
    });
  }

}

