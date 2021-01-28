import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evaluations } from '../model/evaluations';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  getEvaluations(): Observable<Evaluations[]> {
    return this.http.get<Evaluations[]>(`${this.ipAddress}/evaluation/all`)
  }

}
