import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  getLearningMaterials(): Observable<LearningMaterials[]> {
    return this.http.get<LearningMaterials[]>(`${this.ipAddress}/learning-material/all`)
  }

  insertLearningMaterials(learningMaterial: LearningMaterials): Observable<LearningMaterials> {
    return this.http.post<LearningMaterials>(`${this.ipAddress}/learning-material`, learningMaterial)
  }
}
