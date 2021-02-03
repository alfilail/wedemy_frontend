import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  ipAddress = 'http://192.168.13.66:8080'
  // ipAddress = 'http://192.168.15.199:8080'
  constructor() { }
}
