import {
  Component, OnInit, ViewChild, ViewChildren, QueryList, AfterViewInit
} from '@angular/core';
import { AdminDeleteComponent } from "../admin-delete/admin-delete.component";
import { AdminUpdateComponent } from "../admin-update/admin-update.component";
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
  public students$;
  public employers$;
  public jobs$;
  public focusUser$;
  public focusJob$;
  public profile$;
  public picture;
  public mailTo;

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
    private userService: UserService,
    private employerService: EmployerService,
    private jobsService: JobBoardService,
    private dialog: MatDialog,
    ) { }

  ngOnInit() {
    // Pulling All Students and turning it into an Observable
    this.userService.getAllStudents().subscribe(data => {
      console.log(data);
      this.dataSourceStudents = new MatTableDataSource<Student>(data);
    });
    // Pulling All Employers and turning it into an Observable
    this.employerService.getAllEmployers().subscribe(data => {
      console.log(data);
      this.dataSourceEmployer = new MatTableDataSource<Employer>(data);
    });
    // Pulling All Jobs and turning it into an Observable
    this.jobsService.getAllJobs().subscribe(data => {
      console.log(data);
      this.dataSourceJobs = new MatTableDataSource<Job>(data);
    });
  }

  getUserById(id) {
    // const userID = id;
    this.userService.getUserById(id).subscribe(userData => {
      console.log(userData);
      this.profile$ = userData;
      (this.profile$.data.picture_link != null) ? this.picture = this.profile$.data.picture_link
      : this.picture = '../../../assets/Profile-Default-Img.png';
      (this.profile$.data.email != null) ? this.mailTo = `mailto:${this.profile$.data.email}`
      : this.mailTo = 'Update Email';
    });
    return this.profile$;
  }

  getJobById(id: number) {
    // const userID = id;
    this.jobsService.getJobsById(id).subscribe(jobsData => {
      console.log(jobsData);
      this.focusJob$ = jobsData;
    });
  }

  adminDeleteDialog(id: number): void {
    const userID = id;
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(AdminDeleteComponent, {
      data: { userID: userID }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  adminUpdateDialog(id: number): void {
    this.getUserById(id)(data => console.log(data));
  }

}

// adminUpdateDialog(id: number): void {
//   this.getUserById(id)(data => {
//     const indivData$ = data;
//   });
//   const picture = this.picture;
//   const dialogConfig = new MatDialogConfig();

//   dialogConfig.autoFocus = true;
//   dialogConfig.maxHeight = '90vh';
//   dialogConfig.data = { indivData$, picture };

//   const dialogRef = this.dialog.open(AdminUpdateComponent, dialogConfig);
//   dialogRef.afterClosed().subscribe(result => {
//     this.getUserById(id);
//   });
// }
