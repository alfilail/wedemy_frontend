import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  api: string = "http://192.168.15.183:8080";
  
  constructor() { }
}
