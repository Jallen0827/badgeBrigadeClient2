import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
// User model
import { User } from '../_models/user';

import { AuthService } from '../_services/auth.service';
import { APIURL } from '../../environments/environment.prod';

@Injectable({ providedIn: 'root' })

export class EmployerService {
  private userUrl = 'http://www.localhost:3002/user';
  private allEmployers: Observable<User>;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private Auth: AuthService) { }

  getAllEmployers(): Observable<User[]> {
    // console.log('hello');
    const token = this.Auth.getToken();
    return this.http.get(`${APIURL}/user/getAllEmployer`, {headers: {Authorization: token}})
      .pipe(map((employers: any[]) => employers.map((d: any) => new User(
        d.id,
        d.firstName,
        d.lastName,
        d.email,
        d.password,
        d.role,
        d.sessionToken,
        d.user
      ))));
  }


}
