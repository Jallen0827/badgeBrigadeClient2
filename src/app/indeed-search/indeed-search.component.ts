import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-indeed-search',
  templateUrl: './indeed-search.component.html',

  styleUrls: ['./indeed-search.component.scss']

})
export class IndeedSearchComponent implements OnInit {


  @Input()results; // angular will look for results, and they will be passed as proprties
  @Input()selected; // angular will look for selected, and they will be passed as proprties


  constructor() { }

  ngOnInit() {
    console.log(this.results)
  }

}
