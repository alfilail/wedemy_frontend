import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Forum } from '@bootcamp-elearning/models/forum';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private http: HttpClient) { }

  getForum(idDetailModuleRegistration: string): Observable<any[]> {
    return this.http.get<any[]>(`http://192.168.15.199:8080/forum/material/${idDetailModuleRegistration}`)
  }

  postForum(data: Forum): Observable<any[]> {
    return this.http.post<any[]>(`http://192.168.15.199:8080/forum/`, data)
  }
}
