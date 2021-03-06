import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
// User model
import { User } from '../_models/user';

import { Profile } from '../_models/profile';
import { AuthService } from '../_services/auth.service';
import { APIURL } from '../../environments/environment.prod';

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
    // console.log('hello');
    const token = this.Auth.getToken();
    const id = this.Auth.getId();
    const httpOps = {
      headers: { Authorization: token },
      params: { id }
    };
    return this.http.get(`${APIURL}/user/getAllStudents`, httpOps)
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
    return this.http.get<Profile[]>(`${APIURL}/user/getprofile`, {headers: {Authorization: token}});
  }

  getUserById(id: number): Observable<User[]> {
    const token = this.Auth.getToken();
    return this.http.get<User[]>(`${APIURL}/user/getUser/${id}`, {headers: {Authorization: token}});
  }

  updateProfile(formData: any): Observable<Profile[]> { // file: File, portfolio, aboutMe, skills, hired, userId, firstName, lastName, email
    const token = this.Auth.getToken();

    return this.http.put<Profile[]>(`${APIURL}/user/update`,
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
    return this.http.delete<Profile[]>(`${APIURL}/user/delete`, httpOps);
    }

  deleteUser(): Observable<Profile[]> {
    const token = this.Auth.getToken();
    return this.http.delete<Profile[]>(`${APIURL}/user/delete`, {headers: {Authorization: token}});
  }
}
