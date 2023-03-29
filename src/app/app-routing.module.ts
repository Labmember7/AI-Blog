import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPageComponent } from './components/blogs/blog-page/blog-page.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { GenerateBlogComponent } from './components/generate-blog/generate-blog.component';

const routes: Routes = [
  { path: '', component: BlogsComponent },
  { path: 'blogs/:id', component: BlogPageComponent },
  { path: 'generate-blog', component: GenerateBlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
