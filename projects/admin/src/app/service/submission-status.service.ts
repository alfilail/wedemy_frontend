import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubmissionStatus } from '../model/submission-status';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class SubmissionStatusService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  getSubmissionStatus(): Observable<SubmissionStatus[]> {
    return this.http.get<SubmissionStatus[]>(`${this.ipAddress}/submission-status/all`)
  }

  insertSubmissionStatus(submissionStatus: SubmissionStatus): Observable<SubmissionStatus> {
    return this.http.post<SubmissionStatus>(`${this.ipAddress}/module`, submissionStatus)
  }
}