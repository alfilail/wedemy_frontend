import { Component, OnInit } from '@angular/core';
import { ROLE } from '@bootcamp-homepage/constants/roles';
import { ClassService } from '@bootcamp-homepage/services/class.service';
import { UserService } from '@bootcamp-homepage/services/user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  totalParticipant: number;
  totalClass: number;
  totalTutor: number;

  constructor(
    private userService: UserService,
    private classService: ClassService
  ) { }

  ngOnInit(): void {
    this.userService.getUserByRoleCode(ROLE.PARTICIPANT)
    .subscribe(res => {
      this.totalParticipant = res.data.length;
    })

    this.userService.getUserByRoleCode(ROLE.TUTOR)
    .subscribe(res => {
      this.totalTutor = res.data.length;
    })

    this.classService.getAll()
    .subscribe(res => {
      this.totalClass = res.data.length
    })
  }

}
