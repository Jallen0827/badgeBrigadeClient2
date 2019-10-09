import { Component, OnInit } from '@angular/core';

@Component({selector: 'app-past-grads',
templateUrl: './past-grads.component.html',
styleUrls: ['./past-grads.component.css']})
export class PastGradsComponent {
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
}







