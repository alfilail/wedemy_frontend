import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClassEnrollments } from '../model/class-enrollments';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ClassEnrollmentService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  getClassEnrollments(): Observable<ClassEnrollments[]> {
    return this.http.get<ClassEnrollments[]>(`${this.ipAddress}/class-enrollment/all`)
  }
}
