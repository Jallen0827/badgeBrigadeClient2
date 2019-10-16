import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
// User model
import { User } from '../_models/user';

import { Profile } from '../_models/profile';
import { AuthService } from '../_services/auth.service';

@Injectable({ providedIn: 'root' })
export class UserService {

  private userUrl = 'http://www.localhost:3002/user';
  private allStudents: Observable<User>;
  private url = 'http://localhost:3002/user/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

constructor(
  private http: HttpClient,
  private Auth: AuthService) { }

  getAllStudents(): Observable<User[]> {
    console.log('hello');
    return this.http.get(`${this.userUrl}/getAllStudents`)
      .pipe(map((students: any[]) => students.map((d: any) => new User(
        d.id,
        d.firstName,
        d.lastName,
        d.email,
        d.password,
        d.role,
        d.sessionToken
      ))));
  }

  getUser(): Observable<Profile[]> {
    const token = this.Auth.getToken();
    return this.http.get<Profile[]>('http://localhost:3002/user/getprofile', {headers: {Authorization: token}});
  }

  updateProfile(formData): Observable<Profile[]> { // file: File, portfolio, aboutMe, skills, hired, userId, firstName, lastName, email

    console.log(formData);

    // const formData = new FormData();
    // formData.append('file', file);

    const token = this.Auth.getToken();
    return this.http.put<Profile[]>(`${this.url}/update`,
    formData, {headers: {authorization: token}});
  }

}
