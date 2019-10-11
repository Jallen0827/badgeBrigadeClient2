import { Component, OnInit } from '@angular/core';
import {Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

<<<<<<< HEAD

=======
>>>>>>> 34bd8c9ad4046e845697f0715cb776608fe0bff6
export interface Potato {
  name: string;
  graddate: number;
  studied: string;
  employer: string;
  role: string;
}

@Component({selector: 'app-past-grads',
templateUrl: './past-grads.component.html',
styleUrls: ['./past-grads.component.css']})

<<<<<<< HEAD



=======
>>>>>>> 34bd8c9ad4046e845697f0715cb776608fe0bff6
export class PastGradsComponent {
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  potatoes: Potato[] = [
    {name: 'Ashley Whitt', graddate: 2019, studied: 'JavaScript', employer: 'TCC Software Solutions', role: 'Technical Support Specialist'},
    {name: 'Nathan Deisler', graddate: 2019, studied: 'JavaScript', employer: 'Well Done Marketing', role: 'Developer'},
    {name: 'Angie Creed', graddate: 2018, studied: 'JavaScript', employer: 'Luther Consulting, LLC', role: 'Software Engineer'},
    {name: 'Stephen Lockard', graddate: 2019, studied: '.NET', employer: 'NAMIC', role: 'Junior Software Engineer'},
    {name: 'Isaac L', graddate: 2017, studied: 'JavaScript', employer: 'Geico', role: 'Software Engineer II'},
    {name: 'Maddie Ijams', graddate: 2019, studied: 'JavaScript', employer: 'KSM Consulting', role: 'Junior Software Developer'},
    {name: 'George Go', graddate: 2019, studied: '.NET', employer: 'RezPower', role: 'Software Developer'},
    {name: 'Tracy Desserich', graddate: 2018, studied: 'JavaScript', employer: 'Offprem Technology', role: 'Salesforce'},
    {name: 'Maddie Ijams', graddate: 2019, studied: 'JavaScript', employer: 'KSM Consulting', role: 'Junior Software Developer'},
    {name: 'Chai Grindean', graddate: 2019, studied: 'Python', employer: 'Winthrop Capital Management', role: 'Fullstack Developer'},
    {name: 'Drew Blincoe', graddate: 2018, studied: 'JavaScript', employer: 'SIGMA Equipment, Inc.', role: 'Junior Software Developer'},
    {name: 'Kaitlyn Ayres', graddate: 2019, studied: 'JavaScript', employer: 'KSM Consulting', role: 'Junior Web Developer'},
    {name: 'Cliff Weiler', graddate: 2019, studied: 'JavaScript', employer: 'Succession Resource Group', role: 'Application Engineer'},
  ];

  sortedData;

  constructor() {
    this.sortedData = this.potatoes.slice();
  }

  sortData(sort: Sort) {
    const data = this.potatoes.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'graddate': return compare(a.graddate, b.graddate, isAsc);
        case 'studied': return compare(a.studied, b.studied, isAsc);
        case 'employer': return compare(a.employer, b.employer, isAsc);
        case 'role': return compare(a.role, b.role, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}






