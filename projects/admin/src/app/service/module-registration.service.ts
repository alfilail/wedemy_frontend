import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModuleRegistrations } from '@bootcamp-admin/model/module-registrations';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ModuleRegistrationService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }
}
