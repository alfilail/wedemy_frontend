import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import API from '@bootcamp-core/constants/api';
import { Response } from '@bootcamp-elearning/models/responses/response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  getAllScore(idDetailClass: string): Observable<Response<any[]>> {
    return this.http.get<Response<any[]>>(`${API.WEDEMY_HOST_DOMAIN}${API.WEDEMY_SCORE_QUERY_PATH}/${idDetailClass}`);
  }

  getDetailScore(idDetailClass: string, idUser: string = ''): Observable<Response<any[]>> {
    if (idUser === '') {
      return this.http.get<Response<any[]>>(`${API.WEDEMY_HOST_DOMAIN}${API.WEDEMY_DETAIL_SCORE_QUERY_PATH}/${idDetailClass}`);
    } else {
      let param = { idDetailClass, idUser };
      return this.http.get<Response<any[]>>(`${API.WEDEMY_HOST_DOMAIN}${API.WEDEMY_DETAIL_SCORE_QUERY_PATH}`, { params: param });
    }
  }

}
