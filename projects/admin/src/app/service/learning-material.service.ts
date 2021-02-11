import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Responses } from '@bootcamp-admin/model/response';
import { Observable } from 'rxjs';
import { LearningMaterials } from '../model/learning-materials';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class LearningMaterialService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  getLearningMaterials(): Observable<Responses<LearningMaterials[]>> {
    return this.http.get<Responses<LearningMaterials[]>>(`${this.ipAddress}/learning-material`)
  }

  insertLearningMaterials(learningMaterial: LearningMaterials): Observable<Responses<LearningMaterials>> {
    return this.http.post<Responses<LearningMaterials>>(`${this.ipAddress}/learning-material`, learningMaterial)
  }

  updateLearningMaterial(learningMaterial: LearningMaterials): Observable<Responses<LearningMaterials>> {
    return this.http.put<Responses<LearningMaterials>>(`${this.ipAddress}/learning-material`, learningMaterial)
  }

  deleteById(id: string, idUser: string): Observable<Responses<LearningMaterials>> {
    return this.http.delete<Responses<LearningMaterials>>(`${this.ipAddress}/learning-material?id=${id}&idUser=${idUser}`)
  }
}
