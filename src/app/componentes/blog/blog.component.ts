import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../service/blog.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit{

  blogs: any[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(): void {
    this.blogService.getBlogs().subscribe((data: any) => {
      this.blogs = data.data; // Asegúrate de que esto coincida con la respuesta de tu backend
    });
  }
}
