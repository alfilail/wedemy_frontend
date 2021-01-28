import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Classes } from '@bootcamp-homepage/models/classes';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ModuleRegistrationService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getByIdClass(): Observable<Classes[]> {
    return this.http.get<Classes[]>('http://192.168.15.183:8080/class/all')
  }
}
