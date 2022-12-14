import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopStoriesComponent } from './top-stories/top-stories.component';
import { NewsapiService } from './service/newsapi.service';
import { ShortPipe } from './short.pipe';
import { AuthApiService } from './service/authapiservice';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { JwtInterceptor } from './JwtInterceptor';
import { NewsPageComponent } from './news-page/news-page.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { SearchNewsComponent } from './search-news/search-news.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    TopStoriesComponent,
    ShortPipe,
    LoginComponent,
    NewsPageComponent,
    LoadingIndicatorComponent,
    SearchNewsComponent,
    NewsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [NewsapiService,
              AuthApiService,
              { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
              
  bootstrap: [AppComponent]
})
export class AppModule { }
