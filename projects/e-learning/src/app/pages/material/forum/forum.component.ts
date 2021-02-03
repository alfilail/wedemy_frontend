import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Forum } from '@bootcamp-elearning/models/forum';
import { ForumService } from '@bootcamp-elearning/services/forum.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  forums: any[];

  idDetailModuleRegistration: string;

  comment: string;
  reply: string;

  constructor(private route: ActivatedRoute,
    private forumService: ForumService) { }

  ngOnInit(): void {
    this.route.parent.params.subscribe(
      (params) => {
        this.idDetailModuleRegistration = params['idDetailModuleRegistration'];
        this.getForum(this.idDetailModuleRegistration);
      }
    )
  }

  getForum(idDetailModuleRegistration: string): void {
    this.forumService.getForum(idDetailModuleRegistration).subscribe(
      res => {
        this.forums = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }

  post(): void {
    let data: Forum = new Forum();
    data.contentText = this.comment;
    data.idUser = {
      id: '6ac67f85-4c1c-4a49-ada8-d30d0419bc8d'
    };
    data.idDetailModuleRegistration = {
      id: this.idDetailModuleRegistration
    }
    this.forumService.postForum(data).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }

}
