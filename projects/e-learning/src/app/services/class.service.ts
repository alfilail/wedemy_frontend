import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private http: HttpClient) { }

  getDetail(params: any): Observable<any[]> {
    let httpParams = new HttpParams()
    for (let key of Object.keys(params)) {
      httpParams = httpParams.set(key, params[key])
    }

    return this.http.get<any[]>(`http://192.168.15.236:8080/module-registration/module-and-materials`, { params: httpParams })

  }
}
