import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogsFetcherService } from 'src/app/services/blogs-fetcher.service';
import { Subscription } from 'rxjs';
import { Blog } from 'src/app/shared/models/blog';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})

export class BlogsComponent implements OnInit, OnDestroy {
  blogs: Blog[] = [];
  subscription: Subscription = new Subscription();
  isLoading: boolean = true;

  constructor(private blogFetcher: BlogsFetcherService) { }

  ngOnInit(): void {
    this.isLoading = true;
    try {
      this.subscription = this.blogFetcher.getBlogs().subscribe({
        next: (blogs) => {
          this.blogs = blogs;
          this.isLoading = false;
        },
        error: (e) => console.error(e),
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
