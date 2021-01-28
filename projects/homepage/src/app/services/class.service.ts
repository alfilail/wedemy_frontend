import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Classes } from '@bootcamp-homepage/models/classes';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getAll(): Observable<Classes[]> {
    return this.http.get<Classes[]>('http://192.168.13.58:8080/class/all')
  }
  
}
