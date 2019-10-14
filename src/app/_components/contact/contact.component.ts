import { Component, OnInit, ɵɵclassMapInterpolate2 } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})


export class ContactComponent implements OnInit {
  title = 'My first AGM project';
  lat = 39.967025;
  lng = -86.008398;




  constructor() { }

  ngOnInit() {
  }

}
