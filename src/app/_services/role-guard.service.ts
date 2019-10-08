import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {

    // passed from the route itself
    const expectedRole = route.data.expectedRole;

    const token = localStorage.getItem('token');

    // decoding token to get the role out of the payload
    const tokenPayload = decode(token);
    console.log(route);
    console.log(expectedRole);
    console.log(tokenPayload);

    if ( !this.auth.isAuthenticated() || tokenPayload.role !== expectedRole ) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
