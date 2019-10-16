import {
  Component, OnInit, ViewChild, ViewChildren, QueryList, AfterViewInit
} from '@angular/core';
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
    private jobsService: JobBoardService
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

  // getUserById(id): Observable<User> {
  //   let userID = id
  //   return this.userService.
  // }

}
