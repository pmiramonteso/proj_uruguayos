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

constructor(private blogService: BlogService) {}


ngOnInit(): void {
      this.cargarBlogs();
  }

cargarBlogs(): void {
  this.blogService.getBlogs().subscribe((blogs) => {
    console.log('Blogs obtenidos:', blogs);
      this.blogs = blogs;
    },
    error => {
      console.error('Error al obtener eventos', error);
    });
}

}
