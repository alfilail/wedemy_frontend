import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Responses } from '@bootcamp-admin/model/response';
import { Observable } from 'rxjs';
import { Profiles } from '../model/profiles';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  getProfiles(): Observable<Profiles[]> {
    return this.http.get<Profiles[]>(`${this.ipAddress}/profile/all`)
  }

  updateProfile(profile: Profiles): Observable<Responses<Profiles>> {
    return this.http.put<Responses<Profiles>>(`${this.ipAddress}/profile`, profile)
  }

  getProfileById(id: string): Observable<Responses<Profiles>> {
    return this.http.get<Responses<Profiles>>(`${this.ipAddress}/profile/${id}`)
  }
}
