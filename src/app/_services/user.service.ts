import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Profile } from '../_models/profile';
import { AuthService } from '../_services/auth.service';

@Injectable({ providedIn: 'root' })
export class UserService {

  private userUrl = 'http://www.localhost:4200/api/user';
  private url = 'http://localhost:3002/user/getprofile';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private Auth: AuthService) { }

  getUser(): Observable<Profile[]> {
    const token = this.Auth.getToken();
    return this.http.get<Profile[]>('http://localhost:3002/user/getprofile', {headers: {Authorization: token}});
  }

}
