import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogsFetcherService } from './services/blogs-fetcher.service';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogCardComponent } from './components/blogs/blog-card/blog-card.component';
import { LoadingComponent } from './components/loading/loading.component';
import { BlogPageComponent } from './components/blogs/blog-page/blog-page.component';
import { DateFormatterPipe } from './shared/pipes/date-formatter.pipe';
import { TimeSincePipe } from './shared/pipes/time-since.pipe';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { GenerateBlogComponent } from './components/generate-blog/generate-blog.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CacheInterceptor } from './shared/interceptors/cache.interceptor';
import { SortByMostRecentPipe } from './shared/pipes/sort-by-most-recent.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    BlogCardComponent,
    LoadingComponent,
    BlogPageComponent,
    DateFormatterPipe,
    TimeSincePipe,
    NavigationBarComponent,
    GenerateBlogComponent,
    SortByMostRecentPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: CacheInterceptor,
    multi: true
  }, BlogsFetcherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
