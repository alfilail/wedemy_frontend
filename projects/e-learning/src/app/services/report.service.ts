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

  getDetailScore(idDtlClass: string, idParticipant: string = ''): string {
    if (idParticipant === '') {
      return (`${API.WEDEMY_HOST_DOMAIN}${API.WEDEMY_DETAIL_SCORE_QUERY_PATH}s/${idDtlClass}`);
    } else {
      return (`${API.WEDEMY_HOST_DOMAIN}${API.WEDEMY_DETAIL_SCORE_QUERY_PATH}?idDtlClass=${idDtlClass}&idParticipant=${idParticipant}`);
    }
  }

  getAllPressence(idDetailClass: string): Observable<Response<any[]>> {
    return this.http.get<Response<any[]>>(`${API.WEDEMY_HOST_DOMAIN}${API.WEDEMY_DETAIL_PRESENCE_QUERY_PATH}/${idDetailClass}`);
  }

}
