import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProfileDialogComponent } from '../profile-dialog/profile-dialog.component';
import { UserService } from 'src/app/_services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile;
  picture;
  mailTo;

  constructor(
    public dialog: MatDialog,
    private User: UserService) { }

    ngOnInit() {
    this.User.getUser()
    .subscribe(data => {
      console.log(data);
      this.profile = data;
      (this.profile.data.picture_link != null) ? this.picture = this.profile.data.picture_link
      : this.picture = '../../../assets/Profile-Default-Img.png';
      (this.profile.data.email != null) ? this.mailTo = `mailto:${this.profile.data.email}`
      : this.mailTo = 'Update Email';
    });
  }

  openDialog(aboutMe, skills, name, email, hired, portfolio) {
    const dialogRef = this.dialog.open(ProfileDialogComponent, { data: { aboutMe, skills, name, email, hired, portfolio } });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}



