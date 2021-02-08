import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Classes } from '@bootcamp-homepage/models/classes';
import { BaseService } from './base.service';
import { Responses } from '@bootcamp-homepage/models/responses';

@Injectable({
  providedIn: 'root'
})
export class ClassService extends BaseService {

  constructor(private http: HttpClient, private authService: AuthService) {
    super();
  }

  getAll(): Observable<Responses<Classes[]>> {
    return this.http.get<Responses<Classes[]>>(`${this.api}/class/active`)
  }

  getById(id: string): Observable<Classes> {
    return this.http.get<Classes>(`${this.api}/class/${id}`)
  }
  
}
