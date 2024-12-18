import { Injectable } from '@angular/core';
import { User } from '../interface/user';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private userUrl = `${environment.endpoint}/user`;

  constructor(private http: HttpClient) { }

obtenerTodos(): Observable<User[]> {
  return this.http.get<{code:number, msg:string, data:User[]}>(`${this.userUrl}`)
  .pipe(map(response => response.data))
}

guardar(user: User): Observable<User> { //o void?
  return this.http.post<User>(`${this.userUrl}`, user);
}

actualizar(user: User): Observable<User> { //o void?
return this.http.put<User>(`${this.userUrl}`, user);
}

eliminar(id: number): Observable<void> {
return this.http.delete<void>(`${this.userUrl}${id}`);  
}

isAuthenticated(): boolean {
  return !!localStorage.getItem('token');
}
}
