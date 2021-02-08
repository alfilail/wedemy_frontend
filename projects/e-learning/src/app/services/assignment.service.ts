import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import API from '@bootcamp-core/constants/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  constructor(private http: HttpClient) { }

  getAssigment(param: any): Observable<any> {
    return this.http.get<any>(`${API.WEDEMY_HOST_DOMAIN}${API.WEDEMY_ASSIGNMENT_SCORE_QUERY_PATH}`, { params: param });
  }

  setScroreAssignment(data: any): Observable<any> {
    return this.http.post<any>(`${API.WEDEMY_HOST_DOMAIN}${API.WEDEMY_ASSIGNMENT_QUERY_PATH}`, data);

  }
}
