import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.ipAddress}/user/all`);
  }

  getUserByCode(code: string): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.ipAddress}/user/role/${code}`);
  }

  insertUsers(user: Users): Observable<Users> {
    return this.http.post<Users>(`${this.ipAddress}/user`, user);
  }

  deleteById(id: string): Observable<Users> {
    return this.http.delete<Users>(`${this.ipAddress}/user/${id}`)
  }

}
