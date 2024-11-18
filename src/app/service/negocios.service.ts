import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Negocio } from '../interface/negocio';

@Injectable({
  providedIn: 'root'
})
export class NegociosService {
private apiUrl = 'http://localhost:3000/api/negocios';
  
constructor(private http: HttpClient) { }

getNegocios(): Observable<Negocio[]> {
  return this.http.get<Negocio[]>(this.apiUrl);
}
}
