import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jobs } from '../_models/job';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { APIURL } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private url = 'http://localhost:3002/jobs/';
  constructor(private http: HttpClient, private Auth: AuthService) { }

  createJob(formData): Observable<Jobs[]> {
    const token = this.Auth.getToken();
    const id = this.Auth.getId();
    const httpOps = {
      headers: { Authorization: token },
      params: { id }
    };
    return this.http.post<Jobs[]>(`${APIURL}/jobs/create`, formData, httpOps);
  }

  getAllUserJobs(): Observable<Jobs[]> {
    const token = this.Auth.getToken();
    return this.http.get<Jobs[]>(`${APIURL}/jobs/alluserjobs/user`, {headers: {authorization: token}});
  }

  updateJob(formData: any, jobId: number): Observable<Jobs[]> {
    const token = this.Auth.getToken();
    const userId = this.Auth.getId();
    const httpOps = {
      headers: { Authorization: token },
      params: { id: userId }
    };
    return this.http.put<Jobs[]>(`${APIURL}/jobs/${jobId}`, formData, httpOps);
  }

  deleteJob(id: any): Observable<Jobs[]> {
    // console.log(id);
    const token = this.Auth.getToken();
    return this.http.delete<Jobs[]>(`${APIURL}/jobs/delete/${id}`, {headers: {authorization: token}});
  }
}
