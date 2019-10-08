import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from './_components/login/login.component';
import { MainComponent } from './_components/main/main.component';
import { StudentDashboardComponent } from './_components/student-dashboard/student-dashboard.component';
import { EmployerDashboardComponent } from './_components/employer-dashboard/employer-dashboard.component';
import { IndeedSearchComponent } from './_components/indeed-search/indeed-search.component';
import { PastGradsComponent } from './_components/past-grads/past-grads.component';
import { JobBoardComponent } from './_components/job-board/job-board.component';
import { JobInformationComponent } from './_components/job-information/job-information.component';
import { ProfileComponent } from './_components/profile/profile.component';
import { StudentComponent } from './_components/student/student.component';
import { PostingJobComponent } from './_components/admin-dashboard/posting-job/posting-job.component';
import { AdminDashboardComponent } from './_components/admin-dashboard/admin-dashboard.component';
import { SignupComponent } from './_components/signup/signup.component';
import { AuthService } from './_services/auth.service';
import { AuthGuardService as AuthGuard } from './_services/auth-guard.service';
import { RoleGuardService as RoleGuard } from './_services/role-guard.service';


const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "/login", pathMatch: "full" },


  { path: "signup", component: SignupComponent },

  { path: "main", component: MainComponent, canActivate: [AuthGuard] },
  { path: "student-dashboard", component: StudentDashboardComponent, canActivate: [AuthGuard] },
  { path: "employer-dashboard", component: EmployerDashboardComponent, canActivate: [AuthGuard] },
  { path: "indeed-search", component: IndeedSearchComponent, canActivate: [AuthGuard] },
  { path: "past-grads", component: PastGradsComponent, canActivate: [AuthGuard] },
  { path: "job-board", component: JobBoardComponent, canActivate: [AuthGuard] },
  { path: "job/:id", component: JobInformationComponent, canActivate: [AuthGuard] },
  { path: "profile/:id", component: ProfileComponent, canActivate: [AuthGuard] },
  { path: "student/:id", component: StudentComponent, canActivate: [AuthGuard] },
  { path: "post-job", component: PostingJobComponent, canActivate: [AuthGuard] },
  { path: "admin-dashboard", component: AdminDashboardComponent, canActivate: [RoleGuard], data: { expectedRole: 'admin' } },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule { }
