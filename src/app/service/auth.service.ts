import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; //Back

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/usuarios`, { email, password }).pipe(
      catchError(this.handleError),
      tap((response: any) => {
        if (response.token) {
          console.log('Token recibido:', response.token); 
          this.setToken(response.token);
        }
      })
    );
  }

  registro(nombre: string, apellidos: string, email: string, password: string): Observable<any> {
    const body = { nombre, apellidos, email, password };
    return this.http.post(`${this.apiUrl}/api/usuarios`, body).pipe(
      catchError((error) => {
          if (error.error.message === 'El correo ya está registrado') {
              return throwError(() => new Error('Este correo ya está registrado.'));
          }
          return throwError(() => new Error(error.message));
      })
  );
}

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    if (token) {
      const decodedToken = this.decodeToken(token);
      if (this.isTokenExpired(decodedToken)) {
        this.logout();
        return false;
      }
      return true;
    }
    return false;
  }

  isAdmin(): boolean {
    const token = this.getToken();
    if (token) {
      const decodedToken = this.decodeToken(token);
      return decodedToken.rol === 'admin';
    }
    return false;
  }

  decodeToken(token: string) {
    const payload = atob(token.split('.')[1]);
    return JSON.parse(payload);
  }

  isTokenExpired(decodedToken: any): boolean {
    const expDate = decodedToken.exp * 1000;
    return new Date().getTime() > expDate;
  }

  logout() {
    localStorage.removeItem('token');
  }

  private handleError(error: any) {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Backend returned code ${error.status}, body was: ${error.error}`;
    }
    return throwError(() => new Error(errorMessage));
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
