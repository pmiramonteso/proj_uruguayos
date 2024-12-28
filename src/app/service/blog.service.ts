import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { environment } from '../environments/environment';
import { Blog } from '../interface/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private apiUrl = `${environment.endpoint}api/posts`;
  private authHeaders = new HttpHeaders({
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  });

  constructor(private http: HttpClient) { }

  cargarBlogs(): Observable<Blog[]> {
    return this.http.get<{code:number, message:string, data:Blog[]}>(this.apiUrl).pipe(
      map((response) => response.data)
    );
  }

  createBlog(blogData: FormData): Observable<Blog> {
    console.log(blogData);
    return this.http.post<Blog>(this.apiUrl, blogData).pipe(
      tap(response => {
        console.log('Respuesta de la API al crear blog:', response);
      })
    );
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

  updateBlog(blogId: number, blogData: FormData): Observable<Blog> {
    return this.http.patch<Blog>(`${this.apiUrl}/${blogId}`, blogData);
  }

  deleteBlog(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
