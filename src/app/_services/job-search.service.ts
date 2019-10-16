import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Jobs } from '../_models/job';

@Injectable({
  providedIn: 'root'
})
export class JobSearchService {
  private url = `https://github-jobs-proxy.appspot.com/positions?description=`;

  constructor(private http: HttpClient) { }

  getJobs(description, location): Observable<Jobs[]> {
    console.log(description, location);
    console.log(`${this.url}${description}&location=${location}`);
    return this.http.get<Jobs[]>(`${this.url}${description}&location=${location}`);
  }
}
