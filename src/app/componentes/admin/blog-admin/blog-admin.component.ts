import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../../service/blog.service';
import { EditorModule  } from '@tinymce/tinymce-angular';

@Component({
  selector: 'app-blog-admin',
  standalone: true,
  imports: [ReactiveFormsModule, EditorModule ],
  templateUrl: './blog-admin.component.html',
  styleUrl: './blog-admin.component.scss'
})
export class BlogAdminComponent implements OnInit{
  blogForm: FormGroup;
  blogId: number | null = null;
  editorConfig = {
    apiKey: 'qobixfl8d269htsdhbgkwr5cglvx91ltdouomicefl5sxc3x',
    height: 500,
    menubar: false,
    plugins: ['advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview', 'anchor', 'searchreplace', 'wordcount'],
    toolbar: 'undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  };
  
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
        this.blogForm.patchValue(data.data);
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
