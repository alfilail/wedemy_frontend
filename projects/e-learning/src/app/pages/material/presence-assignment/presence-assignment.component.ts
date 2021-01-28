import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presence-assignment',
  templateUrl: './presence-assignment.component.html',
  styleUrls: ['./presence-assignment.component.css']
})
export class PresenceAssignmentComponent implements OnInit {

  participants = [
    {
      name: 'Anggi Alberto',
      averageValue: 89.0
    },
    {
      name: 'Ibon',
      averageValue: 88.0
    },
    {
      name: 'Denkeist',
      averageValue: 87.0
    },
    {
      name: 'Nissa',
      averageValue: 86.0
    },
    {
      name: 'Boss',
      averageValue: 85.0
    },
  ]

  selectedParticipants: any[];


  customers: any[];

  selectedCustomers: any[];

  representatives: any[];

  statuses: any[];

  loading: boolean = false;

  activityValues: number[] = [0, 100];

  constructor() { }

  ngOnInit(): void {
  }

}
