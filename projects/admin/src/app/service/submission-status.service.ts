import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Responses } from '@bootcamp-admin/model/response';
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

  getSubmissionStatus(): Observable<Responses<SubmissionStatus[]>> {
    return this.http.get<Responses<SubmissionStatus[]>>(`${this.ipAddress}/submission-status/all`)
  }

  insertSubmissionStatus(submissionStatus: SubmissionStatus): Observable<Responses<SubmissionStatus>> {
    return this.http.post<Responses<SubmissionStatus>>(`${this.ipAddress}/submission-status`, submissionStatus)
  }

  updateSubmissionStatus(submissionStatus: SubmissionStatus): Observable<Responses<SubmissionStatus>> {
    return this.http.put<Responses<SubmissionStatus>>(`${this.ipAddress}/submission-status`, submissionStatus)
  }

  deleteById(id: string, idUser: string): Observable<Responses<SubmissionStatus>> {
    return this.http.delete<Responses<SubmissionStatus>>(`${this.ipAddress}/submission-status?id=${id}&idUser=${idUser}`)
  }
}
