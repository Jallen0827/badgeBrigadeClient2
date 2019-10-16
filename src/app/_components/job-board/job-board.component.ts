import { Component, OnInit, Input  } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobBoardService } from '../../_services/job-board.service'


@Component({
  selector: 'app-job-board',
  templateUrl: './job-board.component.html',

  styleUrls: ['./job-board.component.scss']

})
export class JobBoardComponent implements OnInit {
  jobs$;



  constructor(
    private jobBoardService: JobBoardService
  ) {


   }

  ngOnInit() {
     this.jobBoardService.getAllJobs().subscribe(data => {
       this.jobs$ = data;
       console.log(this.jobs$)
      });

    };

  }




