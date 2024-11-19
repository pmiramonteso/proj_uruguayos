import { Injectable } from '@angular/core';
import { User } from '../interface/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private userUrl = `${environment.endpoint}auth/registro`;

  constructor(private http: HttpClient) { }

obtenerTodos(): Observable<User[]> {
  return this.http.get<User[]>(`${this.userUrl}`);
}

ingresar(user: User): Observable<User> {
  return this.http.post<User>(`${this.userUrl}`, user);
}

actualizar(user: User): Observable<User> {
return this.http.put<User>(`${this.userUrl}${user.id_user}`, user);
}

eliminar(id: number): Observable<void> {
return this.http.delete<void>(`${this.userUrl}${id}`);  
}

isAuthenticated(): boolean {
  return !!localStorage.getItem('token');
}
}
