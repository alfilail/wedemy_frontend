import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-add',
  templateUrl: './material-add.component.html',
  styleUrls: ['./material-add.component.css']
})
export class MaterialAddComponent implements OnInit {
  description: string;
  constructor() { }

  ngOnInit(): void {
  }

}
