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
  page = 1;
  pageSize = 12;
  constructor(private blogFetcher: BlogsFetcherService) { }

  ngOnInit(): void {
    if (parseInt(localStorage.getItem('page')!)) {
      this.page = parseInt(localStorage.getItem('page')!);
      console.log(this.page, localStorage.getItem('page'));
    }
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
  setPage() {
    localStorage.setItem('page', this.page + "")
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }



}
