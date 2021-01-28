import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  query: string = '';
  classes = [
    {
      name: 'Fullstack Javascript Web Developer Dalam Waktu 3 Bulan',
      desc: 'Raih Impian Menjadi Web Developer hanya dalam 3 Bulan !',
      instructor: 'Anggi Alberto'
    },
    {
      name: 'Fullstack Java Web Developer Dalam Waktu 3 Bulan',
      desc: 'Raih Impian Menjadi Web Developer hanya dalam 3 Bulan !',
      instructor: 'Ibon'
    },
    {
      name: 'Fullstack Ruby Web Developer Dalam Waktu 3 Bulan',
      desc: 'Raih Impian Menjadi Web Developer hanya dalam 3 Bulan !',
      instructor: 'Alpi'
    },
    {
      name: 'Fullstack Python Web Developer Dalam Waktu 3 Bulan',
      desc: 'Raih Impian Menjadi Web Developer hanya dalam 3 Bulan !',
      instructor: 'Alpi'
    }
  ];
  instructors = [];

  results: any[] = this.classes;
  selectedInstructor = 'Semua';

  constructor() { }

  ngOnInit(): void {
    this.getUniqueInstructor();
    console.log(this.instructors);

  }

  getUniqueInstructor(): void {
    const uniqueInstructors = [...new Set(this.classes.map(item => item.instructor))];
    this.instructors = uniqueInstructors;
  }

  search(): void {
    this.results = this.classes.filter((val) => {
      if (this.selectedInstructor == 'Semua') {
        return val.name.toLowerCase().indexOf(this.query.toLowerCase()) !== -1;
      } else {
        return val.name.toLowerCase().indexOf(this.query.toLowerCase()) !== -1
          && val.instructor.toLowerCase().indexOf(this.selectedInstructor.toLowerCase()) !== -1;
      }
    })
  }
}
