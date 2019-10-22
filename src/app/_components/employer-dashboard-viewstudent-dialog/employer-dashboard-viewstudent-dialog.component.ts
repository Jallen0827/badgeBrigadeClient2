import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-employer-dashboard-viewstudent-dialog',
  templateUrl: './employer-dashboard-viewstudent-dialog.component.html',
  styleUrls: ['./employer-dashboard-viewstudent-dialog.component.css']
})
export class EmployerDashboardViewstudentDialogComponent implements OnInit {
  profile: any;
  picture: any;
  mailTo: any;
  hire: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public studentId: any,
    private User: UserService
  ) { }

  ngOnInit() {
    this.getStudentProfile();
  }

  getStudentProfile() {
    this.User.getUserById(this.studentId).subscribe(data => {
      console.log(data);
      this.profile = data;
      (this.profile.picture_link != null) ? this.picture = this.profile.picture_link
      : this.picture = '../../../assets/Profile-Default-Img.png';
      (this.profile.email != null) ? this.mailTo = `mailto:${this.profile.email}`
      : this.mailTo = 'Update Email';
      (this.profile.hired === true) ? this.hire = 'Yes, I got a Job!' : this.hire = 'No, not quite yet.';
    });
  }

}
