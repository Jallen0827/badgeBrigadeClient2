import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { EmployerDashboardComponent } from './employer-dashboard/employer-dashboard.component';
import { IndeedSearchComponent } from './indeed-search/indeed-search.component';
import { JobBoardComponent } from './job-board/job-board.component';
import { JobInformationComponent } from './job-information/job-information.component';
import { ProfileComponent } from './profile/profile.component';
import { PastGradsComponent } from './past-grads/past-grads.component';
import { PostingJobComponent } from './posting-job/posting-job.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    StudentDashboardComponent,
    EmployerDashboardComponent,
    IndeedSearchComponent,
    JobBoardComponent,
    JobInformationComponent,
    ProfileComponent,
    PastGradsComponent,
    PostingJobComponent,
    AdminDashboardComponent,
    StudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
