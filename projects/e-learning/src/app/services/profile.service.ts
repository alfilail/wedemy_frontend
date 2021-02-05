import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from '@bootcamp-elearning/models/profile';
import { Response } from '@bootcamp-elearning/models/responses/response';
import { AuthService } from '@bootcamp-homepage/services/auth.service';
import { BaseService } from '@bootcamp-homepage/services/base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends BaseService{

  constructor(private http: HttpClient, private authService: AuthService) {
    super();
  }

  updateProfile(formData: FormData): Observable<any> {
    console.log(formData.get('file'));
    return this.http.put<any>(`${this.api}/profile`, formData)
  }
}
