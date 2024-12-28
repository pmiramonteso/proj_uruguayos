import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, Subject, tap } from 'rxjs';
import { Evento } from '../interface/evento';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  private eventosActualizados = new Subject<void>();
  private apiUrl = `${environment.endpoint}api/eventos`;
  private authHeaders = new HttpHeaders({
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  });


  constructor(private http: HttpClient) {}

  getEventos(): Observable<Evento[]> {
    return this.http.get<{code:number, message:string, data:Evento[]}>(this.apiUrl).pipe(
      map((response) => response.data)
    );
  }

  crearEvento(eventoData: FormData): Observable<Evento> {
      console.log(eventoData);
      return this.http.post<Evento>(this.apiUrl, eventoData).pipe(
        tap(response => {
          console.log('Respuesta de la API al crear evento:', response);
        })
      );
    }
  actualizarEvento(evento: Evento): Observable<Evento> {
    return this.http.patch<Evento>(`${this.apiUrl}/${evento.id_evento}`, evento);
  }
  
  eliminarEvento(id:number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  uploadPhoto(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/upload-photo`, formData, { headers: this.authHeaders }).pipe(
      map(response => {
      if (response.photo) {

        const photoUrl = `http://localhost:3000/assets/img/${response.photo}`;

        const user = JSON.parse(localStorage.getItem('user') || '{}');
        user.photo = photoUrl;
        localStorage.setItem('user', JSON.stringify(user));
      }
      return response;
      })
    );
  }

  getEventosActualizados() {
    return this.eventosActualizados.asObservable();
  }

  notificarActualizacion() {
    this.eventosActualizados.next();
  }
}
