import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jobs } from '../_models/job';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

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
    return this.http.post<Jobs[]>(`${this.url}create`, formData, httpOps);
  }

  getAllUserJobs(): Observable<Jobs[]> {
    const token = this.Auth.getToken();
    return this.http.get<Jobs[]>(`${this.url}alluserjobs/user`, {headers: {authorization: token}});
  }

  updateJob(formData: any, id: number): Observable<Jobs[]> {
    const token = this.Auth.getToken();
    return this.http.put<Jobs[]>(`${this.url}${id}`, formData, {headers: {authorization: token}});
  }

  deleteJob(id: number): Observable<Jobs[]> {
    console.log(id);
    const token = this.Auth.getToken();
    return this.http.delete<Jobs[]>(`${this.url}delete/${id}`, {headers: {authorization: token}});
  }
}
