import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployerDashboardDialogComponent } from '../employer-dashboard-dialog/employer-dashboard-dialog.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-employer-dashboard',
  templateUrl: './employer-dashboard.component.html',

  styleUrls: ['./employer-dashboard.component.scss']

})
export class EmployerDashboardComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
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
