import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import API from '@bootcamp-core/constants/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http: HttpClient) { }

  getAnswer(param: any): Observable<any> {
    return this.http.get<any>(`${API.WEDEMY_HOST_DOMAIN}${API.WEDEMY_ANSWER_QUERY_PATH}`, { params: param });
  }

  uploadAnswer(formData: any): Observable<any> {
    return this.http.post<any>(`${API.WEDEMY_HOST_DOMAIN}${API.WEDEMY_ANSWER_UPLOAD_QUERY_PATH}`, formData);
  }

}
