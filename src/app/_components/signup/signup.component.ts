import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
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

export class SignupComponent implements OnInit { // class is like bluebprint for a house
  email = '';
  password = '';
  firstName = '';
  lastName = '';
  selected = '';
  signupForm: FormGroup;
  signUp;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'firstName': new FormControl(this.firstName, [
        Validators.required
      ]),
      'lastName': new FormControl(this.lastName, [
        Validators.required
      ]),
      'email': new FormControl(this.email, [
        Validators.required,
        Validators.email
      ]),
      'password': new FormControl(this.password, [
        Validators.required,
        Validators.minLength(6),
      ])
    });
  }

  get validatefName() { return this.signupForm.get('firstName'); }
  get validatelName() { return this.signupForm.get('lastName'); }
  get validateEmail() { return this.signupForm.get('email'); }
  get validatePassword() { return this.signupForm.get('password'); }

  searches = [
    {value: 'student', viewValue: 'Current Student'},
    {value: 'graduate', viewValue: 'Graduate'},
    {value: 'employer', viewValue: 'Employer'}
  ];

  onSubmit(selected) {
    this.selected = selected
    // console.log(this.email);
    // console.log(this.password);

    this.authService.signUp(this.firstName, this.lastName, this.email, this.password, selected)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['main']);
        },
        (error) => {
          console.log(error);
        });
  }


}

