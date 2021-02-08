import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Responses } from '@bootcamp-admin/model/response';
import { Observable } from 'rxjs';
import { Users } from '../model/users';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {
  constructor(private http: HttpClient) {
    super();
  }

  getUsers(): Observable<Responses<Users[]>> {
    return this.http.get<Responses<Users[]>>(`${this.ipAddress}/user/all`);
  }

  getUserByCode(code: string): Observable<Responses<Users[]>> {
    return this.http.get<Responses<Users[]>>(`${this.ipAddress}/user/role/${code}`);
  }

  getUserById(id: string): Observable<Responses<Users>> {
    return this.http.get<Responses<Users>>(`${this.ipAddress}/user/${id}`);
  }

  insertUsers(user: Users): Observable<Responses<Users>> {
    return this.http.post<Responses<Users>>(`${this.ipAddress}/user`, user);
  }

  deleteById(id: string): Observable<Responses<Users>> {
    return this.http.delete<Responses<Users>>(`${this.ipAddress}/user/${id}`)
  }

  updateUser(user: Users): Observable<Responses<Users>> {
    return this.http.patch<Responses<Users>>(`${this.ipAddress}/user`, user);
  }

}
