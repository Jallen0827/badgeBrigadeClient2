import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EmployerDashboardDialogComponent } from '../employer-dashboard-dialog/employer-dashboard-dialog.component';
import { AboutComponent } from '../about/about.component';
import { JobsService } from '../../_services/jobs.service';
import { Jobs } from 'src/app/_models/job';
import { JobBoardService } from '../../_services/job-board.service';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../../_services/user.service';
import { EmployerDashboardViewstudentDialogComponent} from '../employer-dashboard-viewstudent-dialog/employer-dashboard-viewstudent-dialog.component';
import { EmployerDashboardUpdateDialogComponent } from '../employer-dashboard-update-dialog/employer-dashboard-update-dialog.component';
import { EmployerDashboardDeleteDialogComponent } from '../employer-dashboard-delete-dialog/employer-dashboard-delete-dialog.component';

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

@Component({
  selector: 'app-employer-dashboard',
  templateUrl: './employer-dashboard.component.html',

  styleUrls: ['./employer-dashboard.component.scss']

})
export class EmployerDashboardComponent implements OnInit {
  public jobs$;
  public students$;
  public user$;
  public jobId: number;

  public dataSourceStudents;

  columnsToDisplay = ['id', 'firstName', 'lastName', 'email', 'view'];

  constructor(
    public dialog: MatDialog,
    private jobsService: JobsService,
    public userService: UserService
  ) { }

  ngOnInit() {
    this.getAllUserJobs();
    this.userService.getAllStudents().subscribe(data => {
      console.log(data);
      this.dataSourceStudents = new MatTableDataSource<Student>(data);
    });
    this.userService.getUser().subscribe(data => {
      this.user$ = data;
      console.log(this.user$);
    });
  }

  getUserById(id: number): void {
    // const userID = id;
    this.userService.getUserById(id).subscribe(userData => {
      console.log(userData);
    });
  }

  getAllUserJobs() {
    this.jobsService.getAllUserJobs().subscribe(data => {
      this.jobs$ = data;
      this.jobId = this.jobs$.id;
      console.log(this.jobs$);
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(EmployerDashboardDialogComponent, {
      height: '60vh',
      width: '35vw'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllUserJobs();
    });
  }

  viewDialog() {
    const dialogRef = this.dialog.open(EmployerDashboardViewstudentDialogComponent, {
      height: '60vh',
      width: '35vw'
    });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  updateDialog() {
    const dialogRef = this.dialog.open(EmployerDashboardUpdateDialogComponent, {
      height: '60vh',
      width: '35vw'
    });
  }

  deleteDialog(jobId) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = '25vh';
    dialogConfig.width = '35vw';
    dialogConfig.data = {jobId};
    const dialogRef = this.dialog.open(EmployerDashboardDeleteDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
    this.getAllUserJobs();
  });
  }
}
