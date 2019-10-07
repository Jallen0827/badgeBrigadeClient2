import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from '../app/user/user.component';
import { LoginComponent } from '../app/login/login.component'
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { EmployerDashboardComponent } from './employer-dashboard/employer-dashboard.component';
import { IndeedSearchComponent } from './indeed-search/indeed-search.component';
import { PastGradsComponent } from './past-grads/past-grads.component';
import { JobBoardComponent } from './job-board/job-board.component';
import { JobInformationComponent} from './job-information/job-information.component'
import { ProfileComponent } from './profile/profile.component';
import { StudentComponent } from './student/student.component';
import { PostingJobComponent } from './posting-job/posting-job.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path : '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'student-dashboard', component: StudentDashboardComponent },
  { path: 'employer-dashboard', component: EmployerDashboardComponent },
  { path: 'indeed-search', component: IndeedSearchComponent },
  { path: 'past-grads', component: PastGradsComponent },
  { path: 'job-board', component: JobBoardComponent },
  { path: 'job/:id', component: JobInformationComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'student/:id', component: StudentComponent },
  { path: 'post-job', component: PostingJobComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },


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
