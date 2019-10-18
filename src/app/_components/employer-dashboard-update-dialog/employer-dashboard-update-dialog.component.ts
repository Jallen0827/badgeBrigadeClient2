import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { Jobs } from '../../_models/job';
import { JobsService } from '../../_services/jobs.service';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-employer-dashboard-update-dialog',
  templateUrl: './employer-dashboard-update-dialog.component.html',
  styleUrls: ['./employer-dashboard-update-dialog.component.css']
})
export class EmployerDashboardUpdateDialogComponent implements OnInit {

  jobForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private jobsService: JobsService,
    private fb: FormBuilder) {}

  ngOnInit() {
    console.log(this.data);
    this.jobForm = this.fb.group({
      job_title: this.data.job.job_title,
      company_name: this.data.job.company_name,
      position_summary: this.data.job.position_summary,
      contact_email: this.data.job.contact_email,
      where_to_apply: this.data.job.where_to_apply,
      company_logo: this.data.job.company_logo,
      jobId: this.data.job.id,
      file: ''
    });
    console.log(this.data, this.jobForm, 'Hello there, the angel from my nightmare - blink182');
  }

  onFileSelect(event) {
    console.log(event);
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.jobForm.get('file').setValue(file);
    }
  }

  onSubmit() {
    console.log(this.jobForm.value);
    const formData = new FormData();
    formData.append('job_title', this.jobForm.get('job_title').value);
    formData.append('company_name', this.jobForm.get('company_name').value);
    formData.append('position_summary', this.jobForm.get('position_summary').value);
    formData.append('contact_email', this.jobForm.get('contact_email').value);
    formData.append('where_to_apply', this.jobForm.get('where_to_apply').value);
    formData.append('file', this.jobForm.get('file').value);
    formData.append('company_logo', this.jobForm.get('company_logo').value);
    formData.append('jobId', this.jobForm.get('jobId').value);

    const job = this.data.job.id;

    this.jobsService.updateJob(formData, job)
    .subscribe(data => {
      console.log(data);
    });
  }
}
