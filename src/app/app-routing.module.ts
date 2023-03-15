import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPageComponent } from './components/blogs/blog-page/blog-page.component';
import { BlogsComponent } from './components/blogs/blogs.component';

const routes: Routes = [
  { path: '', component: BlogsComponent },
  { path: 'blogs/:id', component: BlogPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
