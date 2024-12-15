import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../service/blog.service';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { Blog } from '../../interface/blog';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterModule, FooterComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit{

  blogs: Blog[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(): void {
    this.blogService.getBlogs().subscribe((data: any) => {
      this.blogs = data.data;
    });
  }
}
