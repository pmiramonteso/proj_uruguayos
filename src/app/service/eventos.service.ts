import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, Subject } from 'rxjs';
import { Evento } from '../interface/evento';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  private eventosActualizados = new Subject<void>();
  private apiUrl = `${environment.endpoint}api/eventos`;

  constructor(private http: HttpClient) {}

  getEventos(): Observable<Evento[]> {
    return this.http.get<{code:number, message:string, data:Evento[]}>(this.apiUrl).pipe(
      map((response) => response.data)
    );
  }

  crearEvento(evento: Evento): Observable<Evento> {
    return this.http.post<Evento>(this.apiUrl, evento);
  }

  actualizarEvento(evento: Evento): Observable<Evento> {
    return this.http.patch<Evento>(`${this.apiUrl}/${evento.id_evento}`, evento);
  }
  
  eliminarEvento(id:number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getEventosActualizados() {
    return this.eventosActualizados.asObservable();
  }

  notificarActualizacion() {
    this.eventosActualizados.next();
  }
}
