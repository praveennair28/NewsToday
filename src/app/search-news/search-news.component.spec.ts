import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { AuthApiService } from '../service/authapiservice';
import { NewsapiService } from '../service/newsapi.service';

import { SearchNewsComponent } from './search-news.component';

describe('SearchNewsComponent', () => {
  let component: SearchNewsComponent;
  let fixture: ComponentFixture<SearchNewsComponent>;
  let instance: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [AuthApiService,NewsapiService],
      imports: [HttpClientTestingModule,FormsModule,],
      declarations: [ SearchNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchNewsComponent);
    component = fixture.componentInstance;
    instance = fixture.componentInstance;
    component.isLoading = false;
    component.pageRefreshed = true;
    component.searchKeyInvalid =false;
    var news = {imageurl:"test",title:"title",url:"testurl"};
    component.newsList.push(news); 
    fixture.detectChanges();
  });

  it('Search component should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('Search component ngOnInit to be called',(() =>
  {
    expect(component.ngOnInit()).not.toBeNull();
  }));

  it('Search component getNewsData without service call',(() =>
  {
    component.getNewsData();
    expect(component.isLoading).toBeTrue();
  }));

  it('Search component getNewsData with service call',(() =>
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

  it('Search component getNewsData with service call with valid response',(() =>
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

  it('Search component getNewsData with service call returns valid response(has multimedia)',(() =>
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

  it('Search component Search with invalid search key ',(() =>
  {
    let service = fixture.debugElement.injector.get(NewsapiService);    
    spyOn(service, "topHeadlines").and.callFake(()=>{
      return of({
        results:[{title:"test",multimedia:[{url: "test"}],url:"testUrl"}]
      })
    });
    component.Search('');
    expect(component.searchKeyInvalid).toBeTrue();
  }));

  it('Search component Search with valid search key',(() =>
  {
    let service = fixture.debugElement.injector.get(NewsapiService); 
    var docs:any = [];   
    spyOn(service, "Search").and.callFake(()=>{
      return of({
        response:[docs]
      })
    });
    component.Search('uae');
    expect(component.isLoading).toBeTrue();
  }));

});


