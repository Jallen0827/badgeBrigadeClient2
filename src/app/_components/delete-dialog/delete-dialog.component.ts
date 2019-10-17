import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { AuthService } from 'src/app/_services/auth.service';


@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})

export class DeleteDialogComponent implements OnInit {

  constructor(
              private auth: AuthService,
              private User: UserService) { }





ngOnInit() {
  }

deleteProfile() {

  this.User.deleteUser()
  .subscribe(data => {
    console.log(data);
  });

  this.auth.logout();

}

}
