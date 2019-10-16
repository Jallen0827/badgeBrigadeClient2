import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Job } from '../_models/job';

@Injectable({
  providedIn: 'root'
})
export class JobSearchService {
  private url = `https://github-jobs-proxy.appspot.com/positions?description=`;
  // https://jobs.github.com/positions.json?description=python&location=new+york
  constructor(private http: HttpClient) { }

  getJobs(description, location): Observable<Job[]>{
    console.log(description, location);
    console.log(`${this.url}${description}&location=${location}`)
    return this.http.get<Job[]>(`${this.url}${description}&location=${location}`);
  }
}
