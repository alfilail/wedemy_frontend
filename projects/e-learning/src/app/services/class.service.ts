import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private http: HttpClient) { }

  getDetail(): Observable<any[]> {
    return this.http.get<any[]>('http://192.168.15.183:8080/module-registration/module-and-materials/ded75595-d761-4d1e-967d-2d7376308fbe')
  }
}
