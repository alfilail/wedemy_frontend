import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profiles } from '@bootcamp-homepage/models/profiles';
import { Users } from '@bootcamp-homepage/models/users';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  constructor(private http: HttpClient, private authService: AuthService) {
    super();
  }

  insertUser(participant: Users): Observable<Users> {
    return this.http.post<Users>(`${this.api}/user`, participant)
  }

  login(user: Users): Observable<any> {
    return this.http.post<any>(`${this.api}/api/login`,
      {
        username: user.username,
        userPassword: user.userPassword
      }
    )
  }

  resetPassword(profile: Profiles): Observable<Profiles> {
    return this.http.patch<Profiles>(`${this.api}/user/forget-password`, profile)
  }

  getUserById(userId: string): Observable<Users> {
    return this.http.get<Users>(`${this.api}/user/${userId}`)
  }
}
