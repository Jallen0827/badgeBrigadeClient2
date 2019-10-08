import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
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
  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

    ngOnInit() {
    }

  onSubmit() {
    // console.log(this.email);
    // console.log(this.password);
    this.authService.login(this.email, this.password)
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


