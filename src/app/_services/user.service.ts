import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

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
  private Auth: AuthService,
  private httpParams: HttpParams) { }

  getAllStudents(): Observable<User[]> {
    // console.log('hello');
    const token = this.Auth.getToken();
    const id = this.Auth.getId();
    const httpOps = {
      headers: { Authorization: token },
      params: { id }
    };
    return this.http.get(`${this.userUrl}/getAllStudents`, httpOps)
      .pipe(map((students: any[]) => students.map((d: any) => new User(
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

  getUser(): Observable<Profile[]> {
    const token = this.Auth.getToken();
    return this.http.get<Profile[]>('http://localhost:3002/user/getprofile', {headers: {Authorization: token}});
  }

  getUserById(id: number): Observable<User[]> {
    const token = this.Auth.getToken();
    return this.http.get<User[]>(`${this.userUrl}/getUser/${id}`, {headers: {Authorization: token}});
  }

  updateProfile(formData: any): Observable<Profile[]> { // file: File, portfolio, aboutMe, skills, hired, userId, firstName, lastName, email
    const token = this.Auth.getToken();

    return this.http.put<Profile[]>(`${this.url}update`,
    formData, {headers: {authorization: token}});
  }


  adminDeleteUser(id: any): Observable<Profile[]> {
    // console.log('admin delete');
    // console.log(id);
    const token = this.Auth.getToken();
    const httpOps = {
      headers: { Authorization: token },
      params: { userId: id }
    };
    return this.http.delete<Profile[]>('http://localhost:3002/user/delete', httpOps);
    }

  deleteUser(): Observable<Profile[]> {
    const token = this.Auth.getToken();
    return this.http.delete<Profile[]>('http://localhost:3002/user/delete', {headers: {Authorization: token}});
  }
}
