import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private http: HttpClient) { }

  getDetail(idDetailClass: string): Observable<any[]> {
    // return this.http.get<any[]>(`http://192.168.13.48:8080/module-registration/module-and-materials/${idDetailClass}`)
    return this.http.get<any[]>(`http://192.168.15.199:8080/module-registration/module-and-materials/${idDetailClass}`)

  }
}
