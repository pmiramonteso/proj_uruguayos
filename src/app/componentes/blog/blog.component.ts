import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../service/blog.service';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { Blog } from '../../interface/blog';
import { NavegacionComponent } from '../navegacion/navegacion.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterModule, FooterComponent, NavegacionComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit{

  blogs: Blog[] = [];
  defaultImageUrl: string = 'assets/img/default-blog.jpg';

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.cargarBlogs();
  }

  cargarBlogs(): void {
    this.blogService.cargarBlogs().subscribe((blogs) => {
      console.log('Blogs obtenidos:', blogs);
        this.blogs = blogs.map(blog => {
          blog.photo = blog.photo ? `http://localhost:3000/assets/img/${blog.photo}` : this.defaultImageUrl;
          return blog;
        });
      },
      error => {
        console.error('Error al obtener eventos', error);
      });
  }
}
