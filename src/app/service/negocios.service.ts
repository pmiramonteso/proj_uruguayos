import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Negocio } from '../interface/negocio';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NegociosService {

private apiUrl = `${environment.endpoint}negocios`;
  
constructor(private http: HttpClient) { }

getNegocios(): Observable<Negocio[]> {
  return this.http.get<Negocio[]>(this.apiUrl);
}
addNegocio(negocio: Negocio): Observable<Negocio> {
  return this.http.post<Negocio>(`${this.apiUrl}`, negocio);
}

updateNegocio(negocio: Negocio): Observable<Negocio> {
  return this.http.put<Negocio>(`${this.apiUrl}${negocio.id_negocio}`, negocio);
}

deleteNegocio(id: number): Observable<Negocio> {
  return this.http.delete<Negocio>(`${this.apiUrl}${id}`);
}
}
