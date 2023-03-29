import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogsFetcherService } from 'src/app/services/blogs-fetcher.service';
import { Subscription } from 'rxjs';
import { Blog } from 'src/app/shared/models/blog';
import { error } from 'console';

@Component({
  selector: 'app-generate-blog',
  templateUrl: './generate-blog.component.html',
  styleUrls: ['./generate-blog.component.css']
})
export class GenerateBlogComponent implements OnInit, OnDestroy {
  blog!: Blog;
  subscription: Subscription = new Subscription();
  isLoading: boolean = false;
  isReady: boolean = false;
  isError: string = "";

  constructor(private blogFetcher: BlogsFetcherService) { }
  ngOnInit(): void { }
  generateBlog(): void {
    this.isLoading = true;
    this.isError = "";
    try {
      this.subscription = this.blogFetcher.getGeneratedBlog().subscribe({
        next: (blog) => {
          this.blog = blog;
          this.isLoading = false;
          this.isReady = true
          if (Object.keys(blog).length === 0) { throw new Error("Server failed to generate a blog, try again.") }
        },
        error: (e: Error) => {
          this.isError = e.message
          console.error(this.isError);
        },
      });
    }
    catch (error) {
      console.log(error)
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
