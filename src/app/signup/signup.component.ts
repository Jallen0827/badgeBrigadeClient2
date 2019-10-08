import { Component, OnInit } from '@angular/core';
import { FetchserviceService } from '../fetchservice.service';

export interface SignUp {
  value: string;
  viewValue: string;
}

// above is for the "x" button that will delete text typed. interfaces are suggestions about how we want data to be.

@Component({
  selector: 'app-search',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent { // class is like bluebprint for a house
  results; // just setting up a variable that we'll use later.. nothing there now but when getSearch runs it's filled with our results
  selectedVal; // same as above

  constructor() { } // down below, getSearch calls another service we set up, FetchserviceService, here we are just renaming it Fetch and this gives us access to getSWAPI method we set up in fetchservice.

  searches = [
    {value: 'student', viewValue: 'Current Student'},
    {value: 'graduate', viewValue: 'Graduate'},
    {value: 'employer', viewValue: 'Employer'}
  ];


}

