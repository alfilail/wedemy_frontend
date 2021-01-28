import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  getLearningMaterialTypes(): Observable<LearningMaterialTypes[]> {
    return this.http.get<LearningMaterialTypes[]>(`${this.ipAddress}/learning-material-type/all`)
  }

  insertLearningMaterialTypes(learningMaterialType: LearningMaterialTypes): Observable<LearningMaterialTypes> {
    return this.http.post<LearningMaterialTypes>(`${this.ipAddress}/learning-material-type`, learningMaterialType)
  }
}
