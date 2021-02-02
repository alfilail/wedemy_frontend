import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MaterialService } from '@bootcamp-elearning/services/material.service';

@Component({
  selector: 'app-material-read',
  templateUrl: './material-read.component.html',
  styleUrls: ['./material-read.component.css']
})
export class MaterialReadComponent implements OnInit {

  material: any;
  idDetailModuleRegistration: string;

  constructor(private location: Location,
    private route: ActivatedRoute,
    private materialService: MaterialService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.idDetailModuleRegistration = params['idDetailModuleRegistration'];
        this.getMaterial();
      }
    )
  }

  getMaterial(): void {
    this.materialService.getMaterial(this.idDetailModuleRegistration).subscribe(
      res => {
        this.material = res;
        console.log(res);

      },
      err => {
        console.log(err);
      }
    )
  }

}
