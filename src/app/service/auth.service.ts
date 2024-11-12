import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.endpoint}auth` //Back
  private userId: number | null = null;

  constructor(private http: HttpClient) {}

  getUserId(): number | null {
    return this.userId;
  }
  public setUserId(id: number): void {
    this.userId = id;
  }

  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('email', email);
    body.set('password', password);

    return this.http.post<any>(`${this.apiUrl}/login`, body.toString(), { headers, withCredentials: true }).pipe(
      tap(response => {
        console.log('Login response:', response);
        if (response.code === 1) {
          localStorage.setItem('token', response.token);
          console.log('User data received:', response.data);
          localStorage.setItem('user', JSON.stringify(response.data.user));
          const userObj = response.data.user;
          this.userId = userObj.id_user;

          if (userObj.photo) {
            localStorage.setItem('userPhotoUrl', `${environment.endpoint}uploads/${userObj.photo}`);
          }
        } else {
          console.error('Login failed:', response.message);
        }
      })
    );
  }

  registro(userData: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/registro`, userData, { withCredentials: true }).pipe(
      tap(response => {
        if (response.code === 1) {
          if (response.token) {
            localStorage.setItem('token', response.token);
          }
          if (response.data && response.data.user) {
            localStorage.setItem('user', JSON.stringify(response.data.user));
          }
        } else {
          console.error('Registration failed:', response.message);
        }
      })
    );
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

//CRUD Usuarios
/*
obtenerTodos(): Observable<User[]> {
  const token = localStorage.getItem('token'); 
  console.log('Token en localStorage:', token); // Obtén el token de localStorage o de donde lo estés guardando
  if (!token) {
    throw new Error('No se encontró el token');
  }
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  return this.http.get<User[]>(`${this.apiUrl}/api/usuarios`, { headers });  // Añadimos /api/usuarios al final
}

ingresar(user: User): Observable<User> {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('No se encontró el token');
  }

  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });

  return this.http.post<User>(`${this.apiUrl}/api/usuarios`, user, { headers });  // Añadimos /api/usuarios al final
}

actualizar(user: User): Observable<User> {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('No se encontró el token');
  }

  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });

  return this.http.put<User>(`${this.apiUrl}/api/usuarios/${user.id}`, user, { headers });  // Añadimos /api/usuarios al final y el id
}

eliminar(id: number): Observable<void> {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('No se encontró el token');
  }

  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });

  return this.http.delete<void>(`${this.apiUrl}/api/usuarios/${id}`, { headers });  // Añadimos /api/usuarios al final y el id
}*/
}
