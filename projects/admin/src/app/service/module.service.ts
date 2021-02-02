import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Modules } from '../model/modules';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ModuleService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  getModules(): Observable<Modules[]> {
    return this.http.get<Modules[]>(`${this.ipAddress}/module/all`)
  }

  insertModules(module: Modules): Observable<Modules> {
    return this.http.post<Modules>(`${this.ipAddress}/module`, module)
  }

  updateModule(module: Modules): Observable<Modules> {
    return this.http.put<Modules>(`${this.ipAddress}/module`, module)
  }

  deleteById(id: string, idUser: string): Observable<Modules> {
    return this.http.delete<Modules>(`${this.ipAddress}/module?id=${id}&idUser=${idUser}`)
  }
}
