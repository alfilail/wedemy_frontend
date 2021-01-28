import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
  title: string = 'Dashboard'

  constructor(private titleService: Title) {
    console.log("Masuk!");

    this.titleService.setTitle(this.title);
  }

  ngOnInit(): void {
  }

}
