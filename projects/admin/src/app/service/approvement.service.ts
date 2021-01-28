import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Approvements } from '../model/approvements';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ApprovementService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  getApprovements(): Observable<Approvements[]> {
    return this.http.get<Approvements[]>(`${this.ipAddress}/approvement/all`)
  }

  insertApprovement(approvement: Approvements): Observable<Approvements> {
    return this.http.post<Approvements>(`${this.ipAddress}/approvement`, approvement)
  }
}
