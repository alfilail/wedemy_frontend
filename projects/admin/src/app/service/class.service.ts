import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClassHelper } from '@bootcamp-admin/model/helper/class-helper';
import { Responses } from '@bootcamp-admin/model/response';
import { Observable } from 'rxjs';
import { Classes } from '../model/classes';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ClassService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  getClasses(): Observable<Responses<Classes[]>> {
    return this.http.get<Responses<Classes[]>>(`${this.ipAddress}/class`)
  }

  insertClasses(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.ipAddress}/class`, formData)
  }

  deleteById(id: string, idUser: string): Observable<Responses<Classes>> {
    return this.http.delete<Responses<Classes>>(`${this.ipAddress}/class?id=${id}&idUser=${idUser}`)
  }

  updateClass(formData: FormData): Observable<any> {
    return this.http.put<any>(`${this.ipAddress}/class`, formData)
  }

  getClassById(id: string): Observable<Responses<Classes>> {
    return this.http.get<Responses<Classes>>(`${this.ipAddress}/class/${id}`)
  }

  getClassInactive(): Observable<Responses<Classes[]>> {
    return this.http.get<Responses<Classes[]>>(`${this.ipAddress}/class/inactive`)
  }


}
