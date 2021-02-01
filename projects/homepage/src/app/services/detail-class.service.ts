import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DetailClasses } from '@bootcamp-homepage/models/detail-classes';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class DetailClassService extends BaseService{

  constructor(private http: HttpClient, private authService: AuthService) {
    super();
  }

  getAll(): Observable<DetailClasses[]> {
    return this.http.get<DetailClasses[]>(`${this.api}/detail-class/all`)
  }

  getById(idDtlClass: string): Observable<DetailClasses> {
    return this.http.get<DetailClasses>(`${this.api}/detail-class/${idDtlClass}`)
  }
  
}
