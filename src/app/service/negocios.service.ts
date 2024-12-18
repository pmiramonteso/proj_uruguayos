import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Negocio } from '../interface/negocio';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NegociosService {

private apiUrl = `${environment.endpoint}api/negocios`;
  
constructor(private http: HttpClient) { }

obtenerNegocios(): Observable<Negocio[]> {
  return this.http.get<{code:number, message:string, data:Negocio[]}>(this.apiUrl).pipe(
    map((response) => response.data)
  );
}
crearNegocio(negocio: Negocio): Observable<Negocio> {
  return this.http.post<Negocio>(this.apiUrl, negocio);
}

actualizarNegocio(negocio: Negocio): Observable<Negocio> {
  return this.http.patch<Negocio>(`${this.apiUrl}/${negocio.id_negocio}`, negocio);
}

eliminarNegocio(id: number): Observable<Negocio> {
  return this.http.delete<Negocio>(`${this.apiUrl}/${id}`);
}
}