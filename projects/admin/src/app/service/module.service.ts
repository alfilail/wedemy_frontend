import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Responses } from '@bootcamp-admin/model/response';
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

  getModules(): Observable<Responses<Modules[]>> {
    return this.http.get<Responses<Modules[]>>(`${this.ipAddress}/module/all`)
  }

  insertModules(module: Modules): Observable<Responses<Modules>> {
    return this.http.post<Responses<Modules>>(`${this.ipAddress}/module`, module)
  }

  updateModule(module: Modules): Observable<Responses<Modules>> {
    return this.http.put<Responses<Modules>>(`${this.ipAddress}/module`, module)
  }

  deleteById(id: string, idUser: string): Observable<Responses<Modules>> {
    return this.http.delete<Responses<Modules>>(`${this.ipAddress}/module?id=${id}&idUser=${idUser}`)
  }
}
