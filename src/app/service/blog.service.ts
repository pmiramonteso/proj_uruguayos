import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private apiUrl = `${environment.endpoint}api/eventos`;

  constructor(private http: HttpClient) { }

  getBlogs(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getBlogById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createBlog(blog: any): Observable<any> {
    return this.http.post(this.apiUrl, blog);
  }

  updateBlog(id: number, blog: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, blog);
  }

  deleteBlog(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
