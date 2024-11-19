import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../environments/environment';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.endpoint}` //Back
  private userId: number | null = null;

  constructor(private http: HttpClient) {

    const user = localStorage.getItem('user');
    if (user) {
      const userObj: User = JSON.parse(user);
      console.log('User object from localStorage:', userObj);
      this.userId = userObj.id_user;
    }
  }
    
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

    return this.http.post<any>(`${this.apiUrl}auth/login`, body.toString(), { headers, withCredentials: true }).pipe(
      tap(response => {
        console.log('Login response:', response);
        if (response.code === 1) {
          localStorage.setItem('token', response.token);
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
    return this.http.post<any>(`${this.apiUrl}auth/registro`, userData, { withCredentials: true  }).pipe(
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

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
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
}
