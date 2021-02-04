import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Responses } from '@bootcamp-admin/model/response';
import { Observable } from 'rxjs';
import { LearningMaterialTypes } from '../model/learning-material-types';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class LearningMaterialTypeService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  getLearningMaterialTypes(): Observable<Responses<LearningMaterialTypes[]>> {
    return this.http.get<Responses<LearningMaterialTypes[]>>(`${this.ipAddress}/learning-material-type/all`)
  }

  insertLearningMaterialTypes(learningMaterialType: LearningMaterialTypes): Observable<Responses<LearningMaterialTypes>> {
    return this.http.post<Responses<LearningMaterialTypes>>(`${this.ipAddress}/learning-material-type`, learningMaterialType)
  }

  updateLearningMaterialType(learningMaterialType: LearningMaterialTypes): Observable<Responses<LearningMaterialTypes>> {
    return this.http.put<Responses<LearningMaterialTypes>>(`${this.ipAddress}/learning-material-type`, learningMaterialType)
  }

  deleteById(id: string, idUser: string): Observable<Responses<LearningMaterialTypes>> {
    return this.http.delete<Responses<LearningMaterialTypes>>(`${this.ipAddress}/learning-material-type?id=${id}&idUser=${idUser}`)
  }
}
