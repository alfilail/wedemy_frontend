import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Forums } from '../model/forums';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private http: HttpClient) { }

  getForums(): Observable<Forums[]> {
    return this.http.get<Forums[]>('http://192.168.13.244:8080/forum/all')
  }
}
