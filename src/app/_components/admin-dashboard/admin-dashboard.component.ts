import {
  Component, OnInit, ViewChild, ViewChildren, QueryList, AfterViewInit
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../../_services/user.service';
import { EmployerService } from '../../_services/employer.service';
import { Observable } from 'rxjs';
// User model
import { User } from '../../_models/user';

// export interface Potato {
//   name: string;
//   graddate: number;
//   studied: string;
//   employer: string;
//   role: string;
// }

// export interface Yam {
//   name: string;
//   graddate: number;
//   studied: string;
//   employer: string;
//   role: string;
// }

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

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})

export class AdminDashboardComponent implements OnInit {
  public students$;
  public employers$;
  // @ViewChild('studentPaginator', {static: true}) studentPaginator: MatPaginator;
  // @ViewChild('employerPaginator', {static: true}) employerPaginator: MatPaginator;
  @ViewChildren( MatPaginator ) paginators: QueryList<MatPaginator>;
  // @ViewChild(MatPaginator, {static: true}) paginator2: MatPaginator;


  columnsToDisplay = ['id', 'firstName', 'lastName', 'email'];
  dataSourceStudents; // new MatTableDataSource<Student>(this.students$);
  dataSourceEmployer; // new MatTableDataSource<Employer>(this.employers$);
  // dataSource2 = new MatTableDataSource<Potato>(this.potatoes);

  constructor(
    private userService: UserService,
    private employerService: EmployerService
    ) { }

  ngOnInit() {
    this.userService.getAllStudents().subscribe(data => {
      console.log(data);
      this.dataSourceStudents = new MatTableDataSource<Student>(data);
      this.dataSourceStudents.paginators = this.paginators;
    });
    // console.log(this.students$)
    this.employerService.getAllEmployers().subscribe(data => {
      console.log(data);
      this.dataSourceEmployer = new MatTableDataSource<Employer>(data);
      this.dataSourceEmployer.paginators = this.paginators;
    });
  }

  AfterViewInit() {
    this.paginators.forEach(paginator => console.log(paginator));
  }

}
