import { Injectable } from '@angular/core';
// Routing authentication through JWT tokens
import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtModule } from '@auth0/angular-jwt';
// Login and signup functions
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// User model
import { User } from '../_models/user';
import { APIURL } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(public jwtHelper: JwtHelperService, private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(email, password) {
    // console.log(email);
    // console.log(password);
    // console.log('inside the login fetch')
    return this.http.post<User>(`${APIURL}/user/signin`, { user: { email, password } })
      .pipe(map(result => {
        // console.log(result);
        localStorage.setItem('token', result.sessionToken);
        localStorage.setItem('id', result.user.id);
      }));
  }

  signUp(firstName, lastName, email, password, role) {
    // console.log(firstName);
    // console.log(lastName);
    // console.log(email);
    // console.log(password);
    // console.log(role);
    return this.http.post<User>(`${APIURL}/user/signup`, { user: { firstName, lastName, email, password, role } })
      .pipe(map(user => {
        // console.log(user);
        localStorage.setItem('token', user.sessionToken);
        localStorage.setItem('id', user.user.id);
      }));
  }

  logout() {
    // console.log(email);
    // console.log(password);
    localStorage.clear();
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getId() {
    return localStorage.getItem('id');
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return true or false
    return !this.jwtHelper.isTokenExpired(token);
  }

}
