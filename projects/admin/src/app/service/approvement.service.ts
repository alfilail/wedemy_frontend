import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Responses } from '@bootcamp-admin/model/response';
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

  getApprovements(): Observable<Responses<Approvements[]>> {
    return this.http.get<Responses<Approvements[]>>(`${this.ipAddress}/approvement`)
  }

  insertApprovement(approvement: Approvements): Observable<Responses<Approvements>> {
    return this.http.post<Responses<Approvements>>(`${this.ipAddress}/approvement`, approvement)
  }

  updateApprovement(approvement: Approvements): Observable<Responses<Approvements>> {
    return this.http.put<Responses<Approvements>>(`${this.ipAddress}/approvement`, approvement);
  }

  deleteById(id: string, idUser: string): Observable<Responses<Approvements>> {
    return this.http.delete<Responses<Approvements>>(`${this.ipAddress}/approvement?id=${id}&idUser=${idUser}`)
  }
}
