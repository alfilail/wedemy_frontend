import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LearningMaterialType } from '@bootcamp-elearning/models/learning-material-type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(private http: HttpClient) { }

  getMaterial(idDetailModuleRegistration: string): Observable<any> {
    return this.http.get<any[]>(`http://192.168.15.236:8080/detail-module-rgs/${idDetailModuleRegistration}`)
  }

  getMaterialTypes(): Observable<LearningMaterialType[]> {
    return this.http.get<LearningMaterialType[]>('http://192.168.15.236:8080/learning-material-type/all')
  }

  saveMaterial(data: any): Observable<any> {
    return this.http.post<any>('http://192.168.15.236:8080/learning-material', data);
  }
}
