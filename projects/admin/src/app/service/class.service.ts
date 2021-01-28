import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Classes } from '../model/classes';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ClassService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  getClasses(): Observable<Classes[]> {
    return this.http.get<Classes[]>(`${this.ipAddress}/class/all`)
  }
}
