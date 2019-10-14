import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../../_services/user.service';
import { Observable } from 'rxjs';
// User model
import { User } from '../../_models/user';

export interface Potato {
  name: string;
  graddate: number;
  studied: string;
  employer: string;
  role: string;
}

export interface Yam {
  name: string;
  graddate: number;
  studied: string;
  employer: string;
  role: string;
}

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})

export class AdminDashboardComponent implements OnInit {
  public students$;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatPaginator, {static: true}) paginator1: MatPaginator;
  @ViewChild(MatPaginator, {static: true}) paginator2: MatPaginator;

  potatoes: Potato[] = [
    {name: 'Ashley Whitt', graddate: 2019, studied: 'JavaScript', employer: 'TCC Software Solutions', role: 'Technical Support Specialist'},
    {name: 'Nathan Deisler', graddate: 2019, studied: 'JavaScript', employer: 'Well Done Marketing', role: 'Developer'},
    {name: 'Angie Creed', graddate: 2018, studied: 'JavaScript', employer: 'Luther Consulting, LLC', role: 'Software Engineer'},
    {name: 'Stephen Lockard', graddate: 2019, studied: '.NET', employer: 'NAMIC', role: 'Junior Software Engineer'},
    {name: 'Isaac L', graddate: 2017, studied: 'JavaScript', employer: 'Geico', role: 'Software Engineer II'},
    {name: 'Maddie Ijams', graddate: 2019, studied: 'JavaScript', employer: 'KSM Consulting', role: 'Junior Software Developer'},
    {name: 'George Go', graddate: 2019, studied: '.NET', employer: 'RezPower', role: 'Software Developer'},
    {name: 'Tracy Desserich', graddate: 2018, studied: 'JavaScript', employer: 'Offprem Technology', role: 'Salesforce'},
    {name: 'Maddie Ijams', graddate: 2019, studied: 'JavaScript', employer: 'KSM Consulting', role: 'Junior Software Developer'},
    {name: 'Chai Grindean', graddate: 2019, studied: 'Python', employer: 'Winthrop Capital Management', role: 'Fullstack Developer'},
    {name: 'Drew Blincoe', graddate: 2018, studied: 'JavaScript', employer: 'SIGMA Equipment, Inc.', role: 'Junior Software Developer'},
    {name: 'Kaitlyn Ayres', graddate: 2019, studied: 'JavaScript', employer: 'KSM Consulting', role: 'Junior Web Developer'},
    {name: 'Cliff Weiler', graddate: 2019, studied: 'JavaScript', employer: 'Succession Resource Group', role: 'Application Engineer'},
    {name: 'Ashley Whitt', graddate: 2019, studied: 'JavaScript', employer: 'TCC Software Solutions', role: 'Technical Support Specialist'},
    {name: 'Nathan Deisler', graddate: 2019, studied: 'JavaScript', employer: 'Well Done Marketing', role: 'Developer'},
    {name: 'Angie Creed', graddate: 2018, studied: 'JavaScript', employer: 'Luther Consulting, LLC', role: 'Software Engineer'},
    {name: 'Stephen Lockard', graddate: 2019, studied: '.NET', employer: 'NAMIC', role: 'Junior Software Engineer'},
    {name: 'Isaac L', graddate: 2017, studied: 'JavaScript', employer: 'Geico', role: 'Software Engineer II'},
    {name: 'Maddie Ijams', graddate: 2019, studied: 'JavaScript', employer: 'KSM Consulting', role: 'Junior Software Developer'},
    {name: 'George Go', graddate: 2019, studied: '.NET', employer: 'RezPower', role: 'Software Developer'},
    {name: 'Tracy Desserich', graddate: 2018, studied: 'JavaScript', employer: 'Offprem Technology', role: 'Salesforce'},
    {name: 'Maddie Ijams', graddate: 2019, studied: 'JavaScript', employer: 'KSM Consulting', role: 'Junior Software Developer'},
    {name: 'Chai Grindean', graddate: 2019, studied: 'Python', employer: 'Winthrop Capital Management', role: 'Fullstack Developer'},
    {name: 'Drew Blincoe', graddate: 2018, studied: 'JavaScript', employer: 'SIGMA Equipment, Inc.', role: 'Junior Software Developer'},
    {name: 'Kaitlyn Ayres', graddate: 2019, studied: 'JavaScript', employer: 'KSM Consulting', role: 'Junior Web Developer'},
    {name: 'Cliff Weiler', graddate: 2019, studied: 'JavaScript', employer: 'Succession Resource Group', role: 'Application Engineer'},
  ];

  yams: Yam[] = [
    {name: 'Ashley Whitt', graddate: 2019, studied: 'JavaScript', employer: 'TCC Software Solutions', role: 'Technical Support Specialist'},
    {name: 'Nathan Deisler', graddate: 2019, studied: 'JavaScript', employer: 'Well Done Marketing', role: 'Developer'},
    {name: 'Angie Creed', graddate: 2018, studied: 'JavaScript', employer: 'Luther Consulting, LLC', role: 'Software Engineer'},
    {name: 'Stephen Lockard', graddate: 2019, studied: '.NET', employer: 'NAMIC', role: 'Junior Software Engineer'},
    {name: 'Isaac L', graddate: 2017, studied: 'JavaScript', employer: 'Geico', role: 'Software Engineer II'},
    {name: 'Maddie Ijams', graddate: 2019, studied: 'JavaScript', employer: 'KSM Consulting', role: 'Junior Software Developer'},
    {name: 'George Go', graddate: 2019, studied: '.NET', employer: 'RezPower', role: 'Software Developer'},
    {name: 'Tracy Desserich', graddate: 2018, studied: 'JavaScript', employer: 'Offprem Technology', role: 'Salesforce'},
    {name: 'Maddie Ijams', graddate: 2019, studied: 'JavaScript', employer: 'KSM Consulting', role: 'Junior Software Developer'},
    {name: 'Chai Grindean', graddate: 2019, studied: 'Python', employer: 'Winthrop Capital Management', role: 'Fullstack Developer'},
    {name: 'Drew Blincoe', graddate: 2018, studied: 'JavaScript', employer: 'SIGMA Equipment, Inc.', role: 'Junior Software Developer'},
    {name: 'Kaitlyn Ayres', graddate: 2019, studied: 'JavaScript', employer: 'KSM Consulting', role: 'Junior Web Developer'},
    {name: 'Cliff Weiler', graddate: 2019, studied: 'JavaScript', employer: 'Succession Resource Group', role: 'Application Engineer'},
    {name: 'Ashley Whitt', graddate: 2019, studied: 'JavaScript', employer: 'TCC Software Solutions', role: 'Technical Support Specialist'},
    {name: 'Nathan Deisler', graddate: 2019, studied: 'JavaScript', employer: 'Well Done Marketing', role: 'Developer'},
    {name: 'Angie Creed', graddate: 2018, studied: 'JavaScript', employer: 'Luther Consulting, LLC', role: 'Software Engineer'},
    {name: 'Stephen Lockard', graddate: 2019, studied: '.NET', employer: 'NAMIC', role: 'Junior Software Engineer'},
    {name: 'Isaac L', graddate: 2017, studied: 'JavaScript', employer: 'Geico', role: 'Software Engineer II'},
    {name: 'Maddie Ijams', graddate: 2019, studied: 'JavaScript', employer: 'KSM Consulting', role: 'Junior Software Developer'},
    {name: 'George Go', graddate: 2019, studied: '.NET', employer: 'RezPower', role: 'Software Developer'},
    {name: 'Tracy Desserich', graddate: 2018, studied: 'JavaScript', employer: 'Offprem Technology', role: 'Salesforce'},
    {name: 'Maddie Ijams', graddate: 2019, studied: 'JavaScript', employer: 'KSM Consulting', role: 'Junior Software Developer'},
    {name: 'Chai Grindean', graddate: 2019, studied: 'Python', employer: 'Winthrop Capital Management', role: 'Fullstack Developer'},
    {name: 'Drew Blincoe', graddate: 2018, studied: 'JavaScript', employer: 'SIGMA Equipment, Inc.', role: 'Junior Software Developer'},
    {name: 'Kaitlyn Ayres', graddate: 2019, studied: 'JavaScript', employer: 'KSM Consulting', role: 'Junior Web Developer'},
    {name: 'Cliff Weiler', graddate: 2019, studied: 'JavaScript', employer: 'Succession Resource Group', role: 'Application Engineer'},
  ];


  columnsToDisplay = ['name', 'studied', 'employer'];
  dataSource = new MatTableDataSource<Potato>(this.potatoes);
  dataSource1 = new MatTableDataSource<Yam>(this.yams);
  // dataSource2 = new MatTableDataSource<Potato>(this.potatoes);

  constructor( private userService: UserService ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource1.paginator = this.paginator1;
    this.students$ = this.userService.getAllStudents();
    this.students$.subscribe(data => console.log(data));
  }

}
