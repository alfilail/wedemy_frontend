import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grades } from '../model/grades';
import { BaseService } from './base.service';
import { Subject } from 'rxjs';
import { Responses } from '@bootcamp-admin/model/response';

@Injectable({
  providedIn: 'root'
})
export class GradeService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  getGrades(): Observable<Responses<Grades[]>> {
    return this.http.get<Responses<Grades[]>>(`${this.ipAddress}/grade/all`)
  }

  insertGrade(grade: Grades): Observable<Responses<Grades>> {
    return this.http.post<Responses<Grades>>(`${this.ipAddress}/grade`, grade)
  }

  deleteById(id: string, idUser: string): Observable<Responses<Grades>> {
    return this.http.delete<Responses<Grades>>(`${this.ipAddress}/grade?id=${id}&idUser=${idUser}`)
  }

  updateGrade(grade: Grades): Observable<Responses<Grades>> {
    return this.http.put<Responses<Grades>>(`${this.ipAddress}/grade/`, grade);
  }

}
