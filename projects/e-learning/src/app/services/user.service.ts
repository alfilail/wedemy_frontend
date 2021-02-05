import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@bootcamp-elearning/models/user';
import { Response } from '@bootcamp-elearning/models/responses/response';
import { AuthService } from '@bootcamp-homepage/services/auth.service';
import { BaseService } from '@bootcamp-homepage/services/base.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService{

  constructor(private http: HttpClient, private authService: AuthService) {
    super();
  }

  insertUser(participant: User): Observable<Response<User>> {
    return this.http.post<Response<User>>(`${this.api}/user`, participant)
  }

  login(user: User): Observable<any> {
    return this.http.post<any>(`${this.api}/api/login`,
      {
        username: user.username,
        userPassword: user.userPassword
      }
    )
  }

  // resetPassword(profile: Profiles): Observable<Responses<Profiles>> {
  //   return this.http.patch<Responses<Profiles>>(`${this.api}/user/forget-password`, profile)
  // }

  getUserById(userId: string): Observable<Response<User>> {
    return this.http.get<Response<User>>(`${this.api}/user/${userId}`)
  }
}
