import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../environments/environment';
import { Blog } from '../interface/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private apiUrl = `${environment.endpoint}api/posts`;

  constructor(private http: HttpClient) { }

  getBlogs(): Observable<Blog[]> {
    return this.http.get<{code:number, message:string, data:Blog[]}>(this.apiUrl).pipe(
      map((response) => response.data)
    );
  }

  createBlog(blog: Blog): Observable<Blog> {
    return this.http.post<Blog>(this.apiUrl, blog);
  }

  updateBlog(blog: Blog): Observable<Blog> {
    return this.http.patch<Blog>(`${this.apiUrl}/${blog.id_blog}`, blog);
  }

  deleteBlog(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
