import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AuthApiService } from '../service/authapiservice';
import { NewsapiService } from '../service/newsapi.service';

import { NewsPageComponent } from './news-page.component';

describe('NewsPageComponent', () => {
  let component: NewsPageComponent;
  let fixture: ComponentFixture<NewsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [AuthApiService,NewsapiService],
      imports: [HttpClientTestingModule,FormsModule,NgxPaginationModule],
      declarations: [ NewsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    //fixture = TestBed.createComponent(NewsPageComponent);
    //component = fixture.componentInstance;
    //component.pageRefreshed = true;
    component.origin ='Home';
    var news = {imageurl:"test",title:"title",url:"testurl"};
    //component.newsList.push(news); 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
  it('News page component ngOnInit to be called',(() =>
  {
    expect(component.ngOnInit()).not.toBeNull();
  }));

  it('News page component ReadMore called',(() =>
  {
    component.ReadMore({title:"test"});
    expect(component.isNewsDetail).toBeTrue();
  }));

  it('News page component goBack Home called ',(() =>
  {
    component.goBack("Home");
    expect(component.isNewsDetail).toBeFalse();
  }));

  it('News page component goBack Search page called ',(() =>
  {
    component.goBack("Search");
    expect(component.isNewsDetail).toBeFalse();
  }));

});
