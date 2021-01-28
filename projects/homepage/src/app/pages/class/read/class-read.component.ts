import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Classes } from '@bootcamp-homepage/models/classes';
import { ClassService } from '@bootcamp-homepage/services/class.service';

@Component({
  selector: 'app-class-read',
  templateUrl: './class-read.component.html',
  styleUrls: ['./class-read.component.css']
})
export class ClassReadComponent implements OnInit {

  class = [
    {'status':1,'img':'https://4.bp.blogspot.com/-fOI4BofCUlE/Vuy5A0K3cDI/AAAAAAAABHw/dCTDJZDG8rEQ8_LryPz5TOVoP0PH05bEQ/s1600/Java.png','quota': 98, 'name': 'Java Fullstack', 'modul': '101 modul'},
    {'status':2,'img':'https://p4.wallpaperbetter.com/wallpaper/416/113/278/android-operating-system-blurred-technology-operating-system-wallpaper-preview.jpg','quota': 101, 'name': 'Android Developer', 'modul': '60 modul'},
    {'status':3,'img':'https://hackernoon.com/hn-images/1*fKb9TdxSYjVzWindUWaGUg.png','quota': 98, 'name': 'Angular', 'modul': '101 modul'},
    {'status':1,'img':'https://hackernoon.com/hn-images/1*fKb9TdxSYjVzWindUWaGUg.png','quota': 98, 'name': 'Vue', 'modul': '101 modul'},
    {'status':2,'img':'https://hackernoon.com/hn-images/1*fKb9TdxSYjVzWindUWaGUg.png','quota': 98, 'name': 'Material', 'modul': '101 modul'},
    {'status':3,'img':'https://hackernoon.com/hn-images/1*fKb9TdxSYjVzWindUWaGUg.png','quota': 98, 'name': 'Bootstrap', 'modul': '101 modul'}
  ]
  searchText = '';
  listClasses: Classes[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // this.classService.getAll()
    //   .subscribe(res => {
    //     this.listClasses = res;
    //     console.log(res);
    //   });
  }

}
