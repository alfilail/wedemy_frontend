import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  getAssignmentSubmissions(): Observable<AssignmentSubmissions[]> {
    return this.http.get<AssignmentSubmissions[]>(`${this.ipAddress}/assignment-submission/all`)
  }


}
