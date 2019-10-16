import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { Jobs } from '../../_models/job';
import { JobsService } from '../../_services/jobs.service';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';



@Component({
  selector: 'app-employer-dashboard-dialog',
  templateUrl: './employer-dashboard-dialog.component.html',
})
export class EmployerDashboardDialogComponent implements OnInit {

  jobForm: FormGroup;

  constructor(
    private jobsService: JobsService,
    private fb: FormBuilder) {}

  ngOnInit() {
    this.jobForm = this.fb.group({
      job_title: '',
      company_name: '',
      position_summary: '',
      contact_email: '',
      where_to_apply: '',
      file: ''
    });
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

    this.jobsService.createJob(formData)
    .subscribe(data => {
      console.log(data);
    });
    // .subscribe(
    //   data => console.log('Success!', data),
    //   error => console.error('Error!', error)
    // );
  }
}
