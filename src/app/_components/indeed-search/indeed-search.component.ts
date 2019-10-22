import { Component, OnInit, Input } from '@angular/core';
import { JobSearchService } from '../../_services/job-search.service';

@Component({
  selector: 'app-indeed-search',
  templateUrl: './indeed-search.component.html',

  styleUrls: ['./indeed-search.component.scss']

})
export class IndeedSearchComponent implements OnInit {
  results: any;

 constructor(private JobSearch: JobSearchService) { }

  ngOnInit() {

  }

  onSubmit(description: any, location: any) {
    // console.log(description, location)
    this.JobSearch.getJobs(description, location)
      .subscribe(data =>{
        // console.log(data);
        this.results = data;
      });
  }

}
