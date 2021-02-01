import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Classes } from '@bootcamp-homepage/models/classes';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  constructor(private http: HttpClient, private authService: AuthService) { }

}
