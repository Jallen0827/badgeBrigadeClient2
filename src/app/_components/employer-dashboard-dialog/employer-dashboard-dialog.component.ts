import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { Job } from '../../_models/job';
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
      jobTitle: '',
      companyName: '',
      positionSummary: '',
      contactEmail: '',
      whereToApplyLink: '',
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
    formData.append('file', this.jobForm.get('file').value);

  //   this.jobsService.createJob()
  //   .pipe(first())
  //   .subscribe(
  //     data => console.log('Success!', data),
  //     error => console.error('Error!', error)
  //   );
  // }
}
}
