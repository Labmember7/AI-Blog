import { Component, OnInit } from '@angular/core';
import { BlogsFetcherService } from 'src/app/services/blogs-fetcher.service';
import { Blog } from 'src/app/shared/models/blog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  blog?: Blog;
  subscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute, private blogFetcher: BlogsFetcherService) { }

  ngOnInit(): void {
    try {
      const id = this.route.snapshot.paramMap.get('id')!;
      this.subscription = this.blogFetcher.getBlogById(id).subscribe({
        next: (blog) => {
          this.blog = blog;
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
