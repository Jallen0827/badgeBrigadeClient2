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
}
