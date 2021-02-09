import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  api: string = "http://192.168.13.30:8080";
  // api: string = "http://192.168.15.236:8080"; //alfi lrp

  // api: string = "http://192.168.15.199:8080"; //alfi lrp
  // api: string = "http://192.168.13.244:8080"; //nisa bootcamp
  // api: string = "http://192.168.13.48:8080"; //alfi bootcamp 
<<<<<<< HEAD
  api: string = "http://192.168.13.66:8080"; //ibon
  // ipAddress = 'http://192.168.13.244:8080' // anisa
=======
  // api: string = "http://192.168.13.66:8080"; //ibon

>>>>>>> fe36894203d91b0f7368bd9aa61f4e68ba7cfd8a
  constructor() { }
}
