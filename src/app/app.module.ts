import { HttpClientModule } from '@angular/common/http';
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

@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    BlogCardComponent,
    LoadingComponent,
    BlogPageComponent,
    DateFormatterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BlogsFetcherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
