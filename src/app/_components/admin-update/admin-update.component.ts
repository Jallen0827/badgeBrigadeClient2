import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';

// IMPORT SERVICES
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-admin-update',
  templateUrl: './admin-update.component.html',
  styleUrls: ['./admin-update.component.css']
})
export class AdminUpdateComponent implements OnInit {
  profileForm: FormGroup;
  hired: string;
  userInfo: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private User: UserService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    // console.log(this.data);
    this.profileForm = this.fb.group({
      // firstName: this.userInfo.firstName,
      // lastName: this.userInfo.lastName,
      name: '',
      email: '',
      portfolio: '',
      about_me: '',
      skills: '',
      hired: '',
      picture_link: '',
      userId: '',
      role: '',
      file: ''
    });
    this.getUserInfo();
  }

  getUserInfo() {
    this.User.getUserById(this.data).subscribe(userInfo => {
      this.userInfo = userInfo;
      // console.log(this.userInfo);
      this.setFormGroup();
    });

  }

  setFormGroup() {
    this.userInfo.name = this.userInfo.firstName + ' ' + this.userInfo.lastName;

    this.profileForm = this.fb.group({
      // firstName: this.userInfo.firstName,
      // lastName: this.userInfo.lastName,
      name: this.userInfo.name,
      email: this.userInfo.email,
      portfolio: this.userInfo.portfolio_link,
      about_me: this.userInfo.about_me,
      skills: this.userInfo.skills,
      hired: this.userInfo.hired,
      picture_link: this.userInfo.picture_link,
      userId: this.userInfo.id,
      role: '',
      file: ''
    });
  }
  onFileSelect(event) {
    console.log(event);
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.profileForm.get('file').setValue(file);
    }
  }

  onSubmit(role: any, hired: any) {
    console.log(this.profileForm.value);
    console.log(role, hired);

    const userName = (this.profileForm.get('name').value).split(' ');
    const firstName = userName[0];
    const lastName = userName[1];
    const formData = new FormData();
    formData.append('file', this.profileForm.get('file').value);
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', this.profileForm.get('email').value);
    formData.append('role', role);
    formData.append('portfolio_link', this.profileForm.get('portfolio').value);
    formData.append('about_me', this.profileForm.get('about_me').value);
    formData.append('skills', this.profileForm.get('skills').value);
    formData.append('hired', hired);
    formData.append('picture_link', this.profileForm.get('picture_link').value);
    formData.append('userId', this.profileForm.get('userId').value);

    this.User.updateProfile(formData)
    .subscribe(data => {
      console.log(data);
    });
  }

}
