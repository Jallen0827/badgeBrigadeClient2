import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { AuthService } from '../../_services/auth.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-delete',
  templateUrl: './admin-delete.component.html',
  styleUrls: ['./admin-delete.component.css']
})
export class AdminDeleteComponent implements OnInit {
  currentUserID = this.userID.userID;

  constructor(
    @Inject(MAT_DIALOG_DATA) public userID: any,
    private auth: AuthService,
    private User: UserService
  ) { }

  ngOnInit() {
    // console.log(this.userID);
    // console.log(`Current User ID is: `, this.currentUserID);
  }

  deleteProfile(currentUserID: any) {
    // console.log(this.userID.userID);
    this.User.adminDeleteUser(this.currentUserID)
    .subscribe(data => {
      // console.log(data);
    });
  }

}
