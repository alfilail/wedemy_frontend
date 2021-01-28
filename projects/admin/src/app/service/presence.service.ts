import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Presences } from '../model/presences';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class PresenceService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  getPresences(): Observable<Presences[]> {
    return this.http.get<Presences[]>(`${this.ipAddress}/presence/all`)
  }
}
