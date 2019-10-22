import { Component, OnInit, Inject } from '@angular/core';
import { JobsService } from 'src/app/_services/jobs.service';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-employer-dashboard-delete-dialog',
  templateUrl: './employer-dashboard-delete-dialog.component.html',
  styleUrls: ['./employer-dashboard-delete-dialog.component.css']
})
export class EmployerDashboardDeleteDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public jobsService: JobsService,
  ) { }

  ngOnInit() {
    // console.log(this.data);
  }

  deleteJob(): void {
    const jobId = this.data.jobId;
    this.jobsService.deleteJob(jobId).subscribe(data => {
      // console.log(data);
    });
  }

}
