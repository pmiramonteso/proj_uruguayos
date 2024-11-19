import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Negocio } from '../interface/negocio';

@Injectable({
  providedIn: 'root'
})
export class NegociosService {

private apiUrl = 'http://localhost:3000/negocios';
  
constructor(private http: HttpClient) { }

getNegocios(): Observable<Negocio[]> {
  return this.http.get<Negocio[]>(this.apiUrl);
}
addNegocio(data: any): Observable<any> {
  return this.http.post(`${this.apiUrl}`, data);
}

updateNegocio(id: string, data: any): Observable<any> {
  return this.http.patch(`${this.apiUrl}${id}`, data);
}

deleteNegocio(id: string): Observable<any> {
  return this.http.delete(`${this.apiUrl}${id}`);
}
}
