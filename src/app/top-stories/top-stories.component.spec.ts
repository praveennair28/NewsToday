import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from '../app-routing.module';
import { news } from '../models/news';
import { AuthApiService } from '../service/authapiservice';
import { NewsapiService } from '../service/newsapi.service';

import { TopStoriesComponent } from './top-stories.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';

describe('TopStoriesComponent', () => {
  let component: TopStoriesComponent;
  let fixture: ComponentFixture<TopStoriesComponent>;
  let instance: any;
  let newsList = [];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [AuthApiService,NewsapiService],
      imports: [HttpClientTestingModule],
      declarations: [
        TopStoriesComponent
      ],
    })
    .compileComponents();    
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopStoriesComponent);
    component = fixture.componentInstance;
    instance = fixture.componentInstance;
    component.categoryInput = 'World';
    component.isLoading = false;
    component.pageRefreshed = true;
    var news:news = {imageurl:"test",title:"title",url:"testurl"};
    component.newsList.push(news); 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit to be called',(() =>
  {
    expect(component.ngOnInit()).not.toBeNull();
  }));

  it('getNewsData without service call',(() =>
  {
    component.getNewsData();
    expect(component.isLoading).toBeTrue();
  }));

  it('getNewsData with service call',(() =>
  {
    let service = fixture.debugElement.injector.get(NewsapiService);    
    //spyOn(service, 'topHeadlines').and.returnValue(throwError({status: 404}));
    spyOn(service, "topHeadlines").and.callFake(()=>{
      return of({
        results:[]
      })
    });
    component.getNewsData();
    expect(component.isLoading).toBeTrue();
  }));

  it('getNewsData with service call with valid response',(() =>
  {
    let service = fixture.debugElement.injector.get(NewsapiService);    
    spyOn(service, "topHeadlines").and.callFake(()=>{
      return of({
        results:[{title:"test"}]
      })
    });
    component.getNewsData();
    expect(component.isLoading).toBeFalsy();
  }));

  it('getNewsData with service call returns valid response(has multimedia)',(() =>
  {
    let service = fixture.debugElement.injector.get(NewsapiService);    
    spyOn(service, "topHeadlines").and.callFake(()=>{
      return of({
        results:[{title:"test",multimedia:[{url: "test"}],url:"testUrl"}]
      })
    });
    component.getNewsData();
    expect(component.isLoading).toBeFalsy();
  }));
  
  it('newsCategorySelected should return valid response',(() =>
  {
    let service = fixture.debugElement.injector.get(NewsapiService);    
    spyOn(service, "topHeadlines").and.callFake(()=>{
      return of({
        results:[{title:"test",multimedia:[{url: "test"}],url:"testUrl"}]
      })
    });
    component.newsCategorySelected('World');
    expect(component.isLoading).toBeFalsy();
  }));
  

});
