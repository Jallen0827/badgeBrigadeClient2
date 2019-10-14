import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
// User model
import { User } from '../_models/user';

@Injectable({ providedIn: 'root' })
export class UserService {
  private userUrl = 'http://www.localhost:3002/user';
  private allStudents: Observable<User>;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient ) { }

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

}
