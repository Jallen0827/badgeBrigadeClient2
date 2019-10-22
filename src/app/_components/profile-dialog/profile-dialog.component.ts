// ANGULAR PACKAGES
import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';

// IMPORT SERVICES
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-profile-dialog',
  templateUrl: './profile-dialog.component.html',
  styleUrls: ['./profile-dialog.component.css']
})
export class ProfileDialogComponent implements OnInit {
profileForm: FormGroup;
hired: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private User: UserService,
    private fb: FormBuilder) { }

  ngOnInit() {
    // console.log(this.data);
    this.profileForm = this.fb.group({
      name: this.data.name,
      email: this.data.email,
      portfolio: this.data.portfolio,
      about_me: this.data.aboutMe,
      skills: this.data.skills,
      hired: (this.data.hired === 'Working on it') ? false : true,
      picture_link: this.data.picture,
      role: '',
      file: ''
    });

    this.hired = this.profileForm.get('hired').value;
  }

  onFileSelect(event: any) {
    // console.log(event);
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.profileForm.get('file').setValue(file);
    }
  }

  onSubmit(role: any, hired: any) {
    const id = localStorage.getItem('id');
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
    formData.append('userId', id);

    this.User.updateProfile(formData)

    .subscribe(data => {
      // console.log(data);
    });

  }

}
