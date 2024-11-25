import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../../service/blog.service';


@Component({
  selector: 'app-blog-admin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './blog-admin.component.html',
  styleUrl: './blog-admin.component.scss'
})
export class BlogAdminComponent implements OnInit{
  blogForm: FormGroup;
  blogId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private blogService: BlogService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.blogForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      content: ['', [Validators.required, Validators.minLength(20)]],
      category: [''],
      status: [true]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.blogId = +params['id'];
        this.loadBlog();
      }
    });
  }

  loadBlog(): void {
    if (this.blogId) {
      this.blogService.getBlogById(this.blogId).subscribe((data: any) => {
        this.blogForm.patchValue(data.data); // Asegúrate de que esto coincida con la respuesta del backend
      });
    }
  }

  saveBlog(): void {
    if (this.blogForm.valid) {
      const blogData = this.blogForm.value;
      if (this.blogId) {
        this.blogService.updateBlog(this.blogId, blogData).subscribe(() => {
          this.router.navigate(['/blog']);
        });
      } else {
        this.blogService.createBlog(blogData).subscribe(() => {
          this.router.navigate(['/blog']);
        });
      }
    }
  }
}
