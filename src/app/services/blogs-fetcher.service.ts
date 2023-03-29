import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  private API_URL = process.env.NG_APP_API_URL
  constructor(private http: HttpClient) { }
  getBlogs(): Observable<Blog[]> {
    return this.http.get<any>(this.API_URL).pipe(
      map(response => {
        this.blogs = response as Blog[];
        return response;
      })
    );
  }
  getBlogById(id: string): Observable<Blog> {
    return this.http.get<any>(`${this.API_URL}/${id}`).pipe(
      map(response => response)
    );
  }
  getGeneratedBlog(): Observable<Blog> {
    const headers = new HttpHeaders().set('Interceptor-Skip', '');

    return this.http.get<any>(`${this.API_URL}/openai`, { headers: headers }).pipe(
      map(response => response)
    );
  }
}
