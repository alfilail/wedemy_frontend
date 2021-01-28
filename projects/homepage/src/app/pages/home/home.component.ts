import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  class = [
    {'img':'https://4.bp.blogspot.com/-fOI4BofCUlE/Vuy5A0K3cDI/AAAAAAAABHw/dCTDJZDG8rEQ8_LryPz5TOVoP0PH05bEQ/s1600/Java.png','quota': 98, 'name': 'Java Fullstack', 'modul': '101 modul'},
    {'img':'https://p4.wallpaperbetter.com/wallpaper/416/113/278/android-operating-system-blurred-technology-operating-system-wallpaper-preview.jpg','quota': 101, 'name': 'Android Developer', 'modul': '60 modul'},
    {'img':'https://hackernoon.com/hn-images/1*fKb9TdxSYjVzWindUWaGUg.png','quota': 98, 'name': 'Angular', 'modul': '101 modul'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
