import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jobs } from '../_models/job';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private url: string = 'http://localhost:3002/jobs/';
  constructor(private http: HttpClient, private Auth: AuthService) { }

  createJob(formData): Observable<Jobs[]> {
    const token = this.Auth.getToken();
    return this.http.post<Jobs[]>(`${this.url}create`,
    formData,
    {headers: {authorization: token}});
  }

  getAllUserJobs(): Observable<Jobs[]> {
    const token = this.Auth.getToken();
    return this.http.get<Jobs[]>(`${this.url}alluserjobs/user`, {headers: {authorization: token}});
  }

  updateJob(formData): Observable<Jobs[]> {
    const token = this.Auth.getToken();
    return this.http.put<Jobs[]>(`${this.url}`, formData, {headers: {authorization: token}});
  }

  deleteJob(id: number): Observable<Jobs[]> {
    console.log(id);
    const token = this.Auth.getToken();
    return this.http.delete<Jobs[]>(`${this.url}delete/${id}`, {headers: {authorization: token}});
  }
}
