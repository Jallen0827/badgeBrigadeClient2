import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Jobs } from '../../app/_models/job';

@Injectable({
  providedIn: 'root'
})
export class JobBoardService {

  private url = 'http://localhost:3002/jobs/alljobs';

  constructor(
    private http: HttpClient,
  ) { }

    getAllJobs(): Observable<Jobs[]> { // Observable<User[]> function returns an observable that will be the user model as an array
      console.log('hello');
      return this.http.get(`${this.url}`) // this.http = HttpClient, which includes GET
        .pipe(map((jobs: any[]) => jobs.map((d: any) => new Jobs( // .then to map through data to create new User, below is expected.
        d.job_title,
        d.company_name,
        d.position_summary,
        d.contact_email,
        d.where_to_apply,
        d.company_logo
        ))));
    }
  }

