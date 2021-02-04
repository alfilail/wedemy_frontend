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

  updateApprovement(approvement: Approvements): Observable<Approvements> {
    return this.http.put<Approvements>(`${this.ipAddress}/approvement`, approvement);
  }

  deleteById(id: string, idUser: string): Observable<Approvements> {
    return this.http.delete<Approvements>(`${this.ipAddress}/approvement?id=${id}&idUser=${idUser}`)
  }
}
