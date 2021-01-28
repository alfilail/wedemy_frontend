import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '@bootcamp-homepage/models/users';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService{

  constructor(private http: HttpClient, private authService: AuthService) {
    super();
  }

  insertUser(participant: Users): Observable<Users>{
    return this.http.post<Users>(`${this.api}/user`, participant)
  }
}
