import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Negocio } from '../interface/negocio';
import { ApiNegocio } from '../interface/api-negocio';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NegociosService {

private apiUrl = `${environment.endpoint}api/negocios`;
  
constructor(private http: HttpClient) { }

getNegocios(): Observable<Negocio[]> {
  return this.http.get<ApiNegocio>(this.apiUrl).pipe(
    map((response) => response.data)
  );
}
addNegocio(negocio: Negocio): Observable<Negocio> {
  return this.http.post<Negocio>(`${this.apiUrl}`, negocio);
}

updateNegocio(negocio: Negocio): Observable<Negocio> {
  return this.http.patch<Negocio>(`${this.apiUrl}/${negocio.id_negocio}`, negocio);
}

deleteNegocio(id: number): Observable<Negocio> {
  return this.http.delete<Negocio>(`${this.apiUrl}${id}`);
}
}