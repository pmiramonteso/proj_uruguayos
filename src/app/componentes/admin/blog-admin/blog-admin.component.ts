import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../../service/blog.service';
import { EditorModule  } from '@tinymce/tinymce-angular';
import { Blog } from '../../../interface/blog';

@Component({
  selector: 'app-blog-admin',
  standalone: true,
  imports: [ReactiveFormsModule, EditorModule ],
  templateUrl: './blog-admin.component.html',
  styleUrl: './blog-admin.component.scss'
})
export class BlogAdminComponent implements OnInit{
  blogForm!: FormGroup;
  editando = false;
  agregando = false;
  mostrarFormularioBlog: boolean = false;
  blogEditando: any = null;
  blogs: Blog[] = [];

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
  ) {}

  ngOnInit(): void {
    this.blogForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(5)]],
      contenido: ['', [Validators.required, Validators.minLength(20)]],
      categoria: [''],
      status: [true]
    });
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
  
  agregarBlog(): void {
    this.mostrarFormularioBlog = !this.mostrarFormularioBlog;
    this.editando = false;
    this.agregando = true;

    if (this.blogForm.valid) {
      const blogData = this.blogForm.value;

      if (this.editando && this.blogEditando) {
        this.blogService.updateBlog(this.blogEditando.id_blog, blogData).subscribe(() => {
          this.router.navigate(['/blog']);
        });
      } else {
        this.blogService.createBlog(blogData).subscribe(() => {
          this.router.navigate(['/blog']);
        });
      }
    }
  }

  editarBlog(blog: Blog): void {
    this.editando = true;
    this.blogEditando = blog;
    this.blogForm.patchValue(blog);
  }

  eliminarBlog(blogId: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este blog?')) {
      this.blogService.deleteBlog(blogId).subscribe({
        next: () => {
          alert('Blog eliminado correctamente.');
          this.router.navigate(['/blog']);
        },
        error: (error) => {
          console.error('Error al eliminar el blog:', error);
          alert('Ocurrió un error al intentar eliminar el blog.');
        }
      });
    }
  }
  
}
