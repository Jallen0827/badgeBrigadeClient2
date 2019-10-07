import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { EmployerDashboardComponent } from './employer-dashboard/employer-dashboard.component';
import { IndeedSearchComponent } from './indeed-search/indeed-search.component';
import { PastGradsComponent } from './past-grads/past-grads.component';
import { JobBoardComponent } from './job-board/job-board.component';
import { JobInformationComponent } from './job-information/job-information.component';
import { ProfileComponent } from './profile/profile.component';
import { StudentComponent } from './student/student.component';
import { PostingJobComponent } from './posting-job/posting-job.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthGuardService as AuthGuard } from './auth-guard.service';
import { RoleGuardService as RoleGuard } from './role-guard.service';


const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "main", component: MainComponent },
  { path: "student-dashboard", component: StudentDashboardComponent },
  { path: "employer-dashboard", component: EmployerDashboardComponent },
  { path: "indeed-search", component: IndeedSearchComponent },
  { path: "past-grads", component: PastGradsComponent },
  { path: "job-board", component: JobBoardComponent },
  { path: "job/:id", component: JobInformationComponent },
  { path: "profile/:id", component: ProfileComponent },
  { path: "student/:id", component: StudentComponent },
  { path: "post-job", component: PostingJobComponent },
  { path: "admin-dashboard", component: AdminDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// { path: "main", component: MainComponent, canActivate: [AuthGuard] },
// { path: "student-dashboard", component: StudentDashboardComponent, canActivate: [AuthGuard] },
// { path: "employer-dashboard", component: EmployerDashboardComponent, canActivate: [AuthGuard] },
// { path: "indeed-search", component: IndeedSearchComponent, canActivate: [AuthGuard] },
// { path: "past-grads", component: PastGradsComponent, canActivate: [AuthGuard] },
// { path: "job-board", component: JobBoardComponent, canActivate: [AuthGuard] },
// { path: "job/:id", component: JobInformationComponent, canActivate: [AuthGuard] },
// { path: "profile/:id", component: ProfileComponent, canActivate: [AuthGuard] },
// { path: "student/:id", component: StudentComponent, canActivate: [AuthGuard] },
// { path: "post-job", component: PostingJobComponent, canActivate: [AuthGuard] },
// { path: "admin-dashboard", component: AdminDashboardComponent, canActivate: [RoleGuard] },
