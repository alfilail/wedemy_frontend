import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pengaturan',
  templateUrl: './pengaturan.component.html',
  styleUrls: ['./pengaturan.component.scss']
})
export class PengaturanComponent implements OnInit {

  active: string;
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  onClick(url: string) {
    if (url == 'data-pribadi') {
      this.route.navigateByUrl(`pengaturan/${url}`)
    } else if (url == 'ubah-sandi') {
      this.route.navigateByUrl(`pengaturan/${url}`)
    } else {
      this.route.navigateByUrl('/pengaturan')
    }
  }

  click(url: string) {
    this.active = url;
  }

}
