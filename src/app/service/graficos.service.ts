import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../environments/environment';
import { Grafico } from '../interface/grafico';
import { ApiGrafico } from '../interface/api-grafico';


@Injectable({
  providedIn: 'root'
})
export class GraficosService {

  private apiUrl = `${environment.endpoint}api/graficos`;

  constructor(private http: HttpClient) { }

  getDatos(): Observable<Grafico[]> {
    return this.http.get<ApiGrafico>(this.apiUrl).pipe(
      map((response) => response.data)
    );
  }
  addDato(dato: Grafico): Observable<Grafico> {
    return this.http.post<Grafico>(`${this.apiUrl}`, dato);
  }
  
  updateDato(dato: Grafico): Observable<Grafico> {
    return this.http.patch<Grafico>(`${this.apiUrl}/${dato.id_datos}`, dato);
  }
  
  deleteDato(id: number): Observable<Grafico> {
    return this.http.delete<Grafico>(`${this.apiUrl}/${id}`);
  }

  getGrafico1(): Observable<Grafico[]> {
    return this.http.get<ApiGrafico>(`${this.apiUrl}/grafico1`).pipe(
      map((response) => response.data)
    );
  }

  getGrafico2(): Observable<Grafico[]> {
    return this.http.get<ApiGrafico>(`${this.apiUrl}/grafico2`).pipe(
      map((response) => response.data)
    );
  }

  getGrafico3(): Observable<Grafico[]> {
    return this.http.get<ApiGrafico>(`${this.apiUrl}/grafico3`).pipe(
      map((response) => response.data)
    );
  }

  getGrafico4(): Observable<Grafico[]> {
    return this.http.get<ApiGrafico>(`${this.apiUrl}/grafico4`).pipe(
      map((response) => response.data)
    );
  }
}
