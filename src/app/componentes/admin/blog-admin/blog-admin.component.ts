import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../../service/blog.service';
import { EditorModule  } from '@tinymce/tinymce-angular';
import { Blog } from '../../../interface/blog';
import { NotificacionesService } from '../../../service/notificaciones.service';

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
    private route: ActivatedRoute,
    private notificationService: NotificacionesService
  ) {}

  ngOnInit(): void {
    this.blogForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(5)]],
      contenido: ['', [Validators.required, Validators.minLength(20)]], // Campo enlazado al editor
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
    this.editando = true;
    this.agregando = true;

    if (this.blogForm.valid) {
      const blogData = this.blogForm.value;

      if (this.editando && this.blogEditando) {
        const updatedBlog = { ...this.blogEditando, ...blogData };
        this.blogService.updateBlog(updatedBlog).subscribe(() => {
          this.notificationService.mostrarExito('Evento actualizado con éxito');
          this.resetFormulario();
          this.cargarBlogs();
        });
      } else {
        this.blogService.createBlog(blogData).subscribe(() => {
          this.notificationService.mostrarExito('Evento creado con éxito');
          this.resetFormulario();
          this.cargarBlogs();
        });
      }
    }
  }

  resetFormulario(): void {
    this.mostrarFormularioBlog = false;
    this.blogForm.reset();
    this.editando = false;
    this.agregando = false;
    this.blogEditando = null;
  }

  editarBlog(blog: Blog): void {
    this.editando = true;
    this.agregando = false;
    
    this.blogEditando = blog;
    this.blogForm.patchValue({
      titulo: blog.titulo,
      contenido: blog.contenido,
      categoria: blog.categoria,
      status: blog.status
    });
    this.mostrarFormularioBlog = true;
  }

  eliminarBlog(blog: Blog): void {
    if (confirm('¿Estás seguro de que deseas eliminar este blog?')) {
      if(blog.id_blog) {
      this.blogService.deleteBlog(blog.id_blog).subscribe({
        next: () => {
          this.notificationService.mostrarExito('Post eliminado con éxito');
          this.cargarBlogs();
        },
        error: (error) => {
          console.error('Error al eliminar el blog:', error);
          this.notificationService.mostrarError('No se pudo eliminar el post');
        }
      });
    }
  }
}
  
}
