import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Responses } from '@bootcamp-admin/model/response';
import { Observable } from 'rxjs';
import { AssignmentSubmissions } from '../model/assignment-submissions';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentSubmissionService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  getAssignmentSubmissions(): Observable<Responses<AssignmentSubmissions[]>> {
    return this.http.get<Responses<AssignmentSubmissions[]>>(`${this.ipAddress}/assignment-submission/all`)
  }

  deleteById(id: string, idUser: string): Observable<Responses<AssignmentSubmissions>> {
    return this.http.delete<Responses<AssignmentSubmissions>>(`${this.ipAddress}/assignment-submission?id=${id}&idUser=${idUser}`)
  }
}
