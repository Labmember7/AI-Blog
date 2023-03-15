import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Blog } from '../shared/models/blog';
@Injectable({
  providedIn: 'root'
})

export class BlogsFetcherService {
  private fallbackBlog: Blog = {
    _id: "Fallback",
    title: "Fallback",
    description: "Fallback",
    author: "Fallback",
    createdAt: "Fallback",
    content: "Fallback",
    imageUrl: "Fallback",
  }
  private blogs: Blog[] = [];
  constructor(private http: HttpClient) { }
  getBlogs(): Observable<Blog[]> {
    return this.http.get<any>('http://localhost:3000/blogs').pipe(
      map(response => {
        this.blogs = response as Blog[];
        return response;
      })
    );
  }
  getBlogById(id: string): Observable<Blog> {
    return this.http.get<any>(`http://localhost:3000/blogs/${id}`).pipe(
      map(response => response)
    );
  }
}
