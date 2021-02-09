import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModuleRegistrations } from '@bootcamp-admin/model/module-registrations';
import { Responses } from '@bootcamp-admin/model/response';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ModuleRegistrationService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  getModuleRegByIdDtlClass(idDtlClass: string): Observable<Responses<ModuleRegistrations[]>> {
    return this.http.get<Responses<ModuleRegistrations[]>>(`${this.ipAddress}/module-registration/dtl-class/${idDtlClass}`)
  }
}
