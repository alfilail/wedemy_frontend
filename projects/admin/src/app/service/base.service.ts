import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  ipAddress = 'http://192.168.13.66:8080'
  constructor() { }
}
