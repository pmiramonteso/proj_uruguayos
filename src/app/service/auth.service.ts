import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError } from 'rxjs';
import { environment } from '../environments/environment';
import { User } from '../interface/user';
import { Access } from '../interface/access';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.endpoint}`
  private currentUser: any = null;
  authHeaders: any;

  constructor(private http: HttpClient) {
    this.currentUser = JSON.parse(localStorage.getItem('user') || '{}');
  }
    
  registro(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}auth/registro`, formData).pipe(
      catchError(error => {
        console.error('Error en el registro', error);
        throw error;
      })
    );
  }

  login(email: string, password: string): Observable<Access> {
    return this.http.post<Access>(`${this.apiUrl}auth/login`, { email, password }, { withCredentials: true }).pipe(
      map((response: Access) => {
        const { accessToken, data } = response;
        console.log('User data:', data.user)
        localStorage.setItem('token', accessToken);
        localStorage.setItem('user', JSON.stringify(data.user));  // Guarda solo la propiedad 'user' dentro de 'data'
        return response;
      })
    );
  }

  uploadPhoto(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}user/upload-photo`, formData, { headers: this.authHeaders }).pipe(
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
  IsLogin(){
    return !!localStorage.getItem('token');
  }
  logout(): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}auth/logout`, {}, { withCredentials: true }).pipe(
      map(() => {
        console.log('Sesión cerrada correctamente en el servidor');
      }),
      catchError((error) => {
        console.error('Error al cerrar sesión en el servidor:', error);
        throw error;
      })
    );
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
  
  getUser() {
    return this.currentUser;
  }
  getToken() {
    return localStorage.getItem('token');
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }
}
