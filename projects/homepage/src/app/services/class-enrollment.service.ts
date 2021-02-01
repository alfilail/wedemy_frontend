import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClassEnrollments } from '@bootcamp-homepage/models/class-enrollments';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ClassEnrollmentService extends BaseService{

  constructor(private http: HttpClient, private authService: AuthService) {
    super();
  }

  insertClassEnrollment(classEnrollment: ClassEnrollments): Observable<ClassEnrollments> {
    return this.http.post<ClassEnrollments>(`${this.api}/class-enrollment`, classEnrollment)
  }
}
