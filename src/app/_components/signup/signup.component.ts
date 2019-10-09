import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from '../../_services/auth.service';

export interface SignUp {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent { // class is like bluebprint for a house
  email = '';
  password = '';
  firstName = '';
  lastName = '';
  selected = '';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  searches = [
    {value: 'student', viewValue: 'Current Student'},
    {value: 'graduate', viewValue: 'Graduate'},
    {value: 'employer', viewValue: 'Employer'}
  ];

  onSubmit(selected) {
    this.selected = selected
    // console.log(this.email);
    // console.log(this.password);

    this.authService.signUp(this.email, this.password, this.firstName, this.lastName, selected)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['main']);
        },
        (error) => {
          console.log(error);
        });
  }


}

