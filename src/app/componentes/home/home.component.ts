import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogService } from '../../service/blog.service';
import { Blog } from '../../interface/blog';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { NavegacionComponent } from '../navegacion/navegacion.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, FooterComponent, NavegacionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  blogs: Blog[] = [];
  defaultImageUrl: string = 'assets/img/avatar-IG.jpg';

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
