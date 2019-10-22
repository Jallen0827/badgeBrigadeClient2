import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Jobs } from '../../app/_models/job';
import { APIURL } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class JobBoardService {

  private url = 'http://localhost:3002/jobs/alljobs';

  constructor(
    private http: HttpClient,
    private Auth: AuthService,
  ) { }

    getAllJobs(): Observable<Jobs[]> { // Observable<User[]> function returns an observable that will be the user model as an array
      // console.log('hello');
      return this.http.get(`${APIURL}/jobs/alljobs`) // this.http = HttpClient, which includes GET
        .pipe(map((jobs: any[]) => jobs.map((d: any) => new Jobs( // .then to map through data to create new User, below is expected.
        d.id,
        d.job_title,
        d.company_name,
        d.position_summary,
        d.contact_email,
        d.where_to_apply,
        d.company_logo
        ))));
    }

    getJobsById(id: number): Observable<Jobs[]> {
      // console.log('hello');
      // console.log(id);
      const token = this.Auth.getToken();
      return this.http.get<Jobs[]>(`${APIURL}/jobs/job/${id}`, {headers: {Authorization: token}});
    }

  }

