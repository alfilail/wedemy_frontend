import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grades } from '../model/grades';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class GradeService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  getGrades(): Observable<Grades[]> {
    return this.http.get<Grades[]>(`${this.ipAddress}/grade/all`)
  }

  insertGrade(grade: Grades): Observable<Grades> {
    return this.http.post<Grades>(`${this.ipAddress}/grade`, grade)
  }

  deleteById(id: string): Observable<Grades> {
    return this.http.delete<Grades>(`${this.ipAddress}/grade/${id}`)
  }

  updateGrade(grade: Grades): Observable<Grades> {
    return this.http.put<Grades>(`${this.ipAddress}/grade/`, grade);
  }
}
