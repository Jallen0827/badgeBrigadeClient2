import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployerDashboardDialogComponent } from '../employer-dashboard-dialog/employer-dashboard-dialog.component';
import { AboutComponent } from '../about/about.component';
import { JobsService } from '../../_services/jobs.service';
import { Jobs } from 'src/app/_models/job';
import { JobBoardService } from '../../_services/job-board.service';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../../_services/user.service';

export interface Student {
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

  public dataSourceStudents;

  columnsToDisplay = ['firstName', 'lastName', 'email', 'view'];

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

  getAllUserJobs() {
    this.jobsService.getAllUserJobs().subscribe(data => {
      this.jobs$ = data;
      console.log(this.jobs$);
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(EmployerDashboardDialogComponent, {
      height: '60vh',
      width: '35vw'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
