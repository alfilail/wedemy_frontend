import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  ipAddress = 'http://192.168.15.86:8080' // ibon
  // ipAddress = 'http://192.168.13.244:8080' // anisa
  // ipAddress: string = "http://192.168.15.183:8080"; //alfi lrp

  constructor() { }
}
