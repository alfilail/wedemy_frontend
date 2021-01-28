import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-tutor',
  templateUrl: './create-tutor.component.html',
  styleUrls: ['./create-tutor.component.scss']
})
export class CreateTutorComponent implements OnInit {

  productDialog: boolean;
  rangeDates: Date[];
  submitted: boolean;
  statuses: any[];

  listUsers = [
    { username: 'admin1', roleCode: 'adm', name: 'Imron Rosyadi' },
    { username: 'tutor1', roleCode: 'ttr', name: 'Nur Alfilail' },
    { username: 'tutor2', roleCode: 'ttr', name: 'Atalya Yoseba' },
    { username: 'student1', roleCode: 'std', name: 'Dina Kasturi' },
    { username: 'student2', roleCode: 'std', name: 'Anggi Alberto' },
  ]

  user: any[] = this.listUsers;

  constructor() {

  }

  ngOnInit(): void {
  }


}
