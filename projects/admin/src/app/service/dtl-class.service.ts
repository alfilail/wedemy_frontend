import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DetailClasses } from '@bootcamp-admin/model/dtl-classes';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class DtlClassService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  getDetailClasses(): Observable<DetailClasses[]> {
    return this.http.get<DetailClasses[]>(`${this.ipAddress}/detail-class/all`)
  }
}
