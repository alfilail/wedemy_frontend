import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getMyClass(): Observable<any[]> {
    // participant
    return this.http.get<any[]>('http://192.168.15.199:8080/class-enrollment/user/6ac67f85-4c1c-4a49-ada8-d30d0419bc8d')

    // return this.http.get<any[]>('http://192.168.15.199:8080/detail-class/tutor/34b21b84-07f8-47a6-89fe-016b9f517c2d')

  }

}


