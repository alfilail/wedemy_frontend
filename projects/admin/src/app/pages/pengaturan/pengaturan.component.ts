import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-pengaturan',
  templateUrl: './pengaturan.component.html',
  styleUrls: ['./pengaturan.component.scss']
})
export class PengaturanComponent implements OnInit {

  active: string;
  constructor(private route: Router, private messageService: MessageService) { }

  ngOnInit(): void {
  }


  click(url: string) {
    this.active = url;
  }

}
