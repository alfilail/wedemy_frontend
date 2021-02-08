import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Classes } from '@bootcamp-homepage/models/classes';
import { ModuleAndLearningMaterials } from '@bootcamp-homepage/models/module-and-learning-material';
import { Modules } from '@bootcamp-homepage/models/modules';
import { Responses } from '@bootcamp-homepage/models/responses';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ModuleRegistrationService extends BaseService {

  constructor(private http: HttpClient, private authService: AuthService) {
    super();
  }

  getByIdClass(iddtlclass: string): Observable<Responses<Modules[]>> {
    return this.http.get<Responses<Modules[]>>(`${this.api}/module-registration/dtl-class/${iddtlclass}`)
  }

  // getModuleAndLearningMaterialsByIdDtlClass(idDtlClass: string): Observable<ModuleAndLearningMaterials[]> {
  //   return this.http.get<ModuleAndLearningMaterials[]>(`${this.api}/module-registration/module-and-materials/${idDtlClass}`)
  // }

  getModuleAndLearningMaterialsByIdDtlClass(idDtlClass: string): Observable<any> {
    return this.http.get<any>(`${this.api}/module-registration/module-and-materials/${idDtlClass}`)
  }
}
