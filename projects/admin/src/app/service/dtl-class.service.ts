import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DetailClasses } from '@bootcamp-admin/model/dtl-classes';
import { Responses } from '@bootcamp-admin/model/response';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class DtlClassService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  getDetailClasses(): Observable<Responses<DetailClasses[]>> {
    return this.http.get<Responses<DetailClasses[]>>(`${this.ipAddress}/detail-class/all`)
  }

  getDetailClassById(id: string): Observable<Responses<DetailClasses>> {
    return this.http.get<Responses<DetailClasses>>(`${this.ipAddress}/detail-class/${id}`)
  }


}
