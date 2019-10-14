import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { AuthService } from '../../_services/auth.service';
import { MatDialog } from '@angular/material'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  loginForm: FormGroup;
  login;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
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

  get validateEmail() { return this.loginForm.get('email'); }
  get validatePassword() { return this.loginForm.get('password'); }

  onSubmit() {
    // console.log(this.email);
    // console.log(this.password);
    this.authService.login(this.email, this.password)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['main']);
        },
        (error) => {
          console.log(error);
          // console.log('this is on the front-end');
        });
  }

}


