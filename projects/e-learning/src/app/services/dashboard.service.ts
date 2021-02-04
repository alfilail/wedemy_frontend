import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ROLE } from '@bootcamp-homepage/constants/roles';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getMyClass(userId: string, roleCode: string): Observable<any[]> {
    let PATH_MY_CLASS: string;
    if (ROLE.TUTOR === roleCode) {
      PATH_MY_CLASS = 'detail-class/tutor';
    } else if (ROLE.PARTICIPANT) {
      PATH_MY_CLASS = 'class-enrollment/user';
    }
    return this.http.get<any[]>(`http://192.168.15.236:8080/${PATH_MY_CLASS}/${userId}`);
  }

}


