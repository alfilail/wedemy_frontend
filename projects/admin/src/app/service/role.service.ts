import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Roles } from '../model/roles';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  getRoles(): Observable<Roles[]> {
    return this.http.get<Roles[]>(`${this.ipAddress}/role/all`)
  }
}
