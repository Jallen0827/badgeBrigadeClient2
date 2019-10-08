import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';


import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './_components/login/login.component';


import { MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatSelectModule, MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule, MatFormFieldModule,  } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { CustomMaterialModule } from './core/material.module';
import {FormsModule} from '@angular/forms';

import { MainComponent } from './_components/main/main.component';
import { StudentDashboardComponent } from './_components/student-dashboard/student-dashboard.component';
import { EmployerDashboardComponent } from './_components/employer-dashboard/employer-dashboard.component';
import { IndeedSearchComponent } from './_components/indeed-search/indeed-search.component';

import { PastGradsComponent } from './_components/past-grads/past-grads.component';
import { JobBoardComponent } from './_components/job-board/job-board.component';
import { PostJobComponent } from './_components/post-job/post-job.component';
import { AdminDashboardComponent } from './_components/admin-dashboard/admin-dashboard.component';
import { JobInformationComponent } from './_components/job-information/job-information.component';
import { ProfileComponent } from './_components/profile/profile.component';
import { PostingJobComponent } from './_components/admin-dashboard/posting-job/posting-job.component';
import { StudentComponent } from './_components/student/student.component';
import { JwtHelperService, JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { tokenName } from '@angular/compiler';
import { AboutComponent } from './_components/about/about.component';
import { ContactComponent } from './_components/contact/contact.component';


import { SignupComponent } from './_components/signup/signup.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';



import { NavbarComponent } from './_components/navbar/navbar.component';
import { FooterComponent } from './_components/footer/footer.component';
import { AuthService } from './_services/auth.service';
import { AuthGuardService } from './_services/auth-guard.service';
import { RoleGuardService } from './_services/role-guard.service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';

export function getToken(): string {
  return localStorage.getItem('token');
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    StudentDashboardComponent,
    EmployerDashboardComponent,
    IndeedSearchComponent,
    PastGradsComponent,
    JobBoardComponent,
    PostJobComponent,
    JobInformationComponent,
    ProfileComponent,
    StudentComponent,
    PostingJobComponent,
    AdminDashboardComponent,
    StudentComponent,
    AboutComponent,
    ContactComponent,
    ProfileComponent,

    FooterComponent,
    NavbarComponent,
    SignupComponent,




  ],

  imports: [
  CommonModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule,
  BrowserModule,
  AppRoutingModule,
  MatFormFieldModule,
  BrowserAnimationsModule,
  MatSelectModule,
  FormsModule,
  MatGridListModule,
  MatDialogModule
  JwtModule,
  HttpClientModule

  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    AuthService,
    AuthGuardService,
    RoleGuardService,
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
