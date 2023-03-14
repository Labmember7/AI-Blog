import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogsFetcherService } from 'src/app/services/blogs-fetcher.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})

export class BlogsComponent implements OnInit, OnDestroy {
  blogs: any[] = [];
  subscription: Subscription = new Subscription();

  constructor(private blogFetcher: BlogsFetcherService) { }

  ngOnInit(): void {
    try {
      this.subscription = this.blogFetcher.getBlogs().subscribe(blogs => {
        this.blogs = blogs;
        console.log(blogs)
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
