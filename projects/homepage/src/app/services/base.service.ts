import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  //api: string = "http://192.168.15.236:8080"; //alfi lrp

  // api: string = "http://192.168.15.199:8080"; //alfi lrp
  // api: string = "http://192.168.13.244:8080"; //nisa bootcamp
  // api: string = "http://192.168.13.48:8080"; //alfi bootcamp 
  api: string = "http://192.168.13.66:8080"; //ibon

  constructor() { }
}
