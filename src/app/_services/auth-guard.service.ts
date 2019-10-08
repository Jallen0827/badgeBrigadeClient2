import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(): boolean {
  if (!this.auth.isAuthenticated()) {
    this.router.navigate(['login']);
    return false;
  }
  return true;
  }
}


// canActivate(
//   next: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot): Promise<boolean> | boolean {
//   return new Promise(resolve =>
//     this.auth.isAuthenticated()
//     .then(status: boolean => {
//       if(status === false) {
//         this.router.navigate(['login']);
//       }
//       resolve(status);
//     })
//     .catch(() => {
//       this.router.navigate(['login']);
//       resolve(false);
//     })
//     );
//   }
