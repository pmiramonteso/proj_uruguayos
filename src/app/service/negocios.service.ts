import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NegociosService {
private apiUrl = 'http://localhost:3000/negocios';
  
constructor(private http: HttpClient) { }

getNegocios(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl);
}
}
