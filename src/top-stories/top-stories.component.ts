import { ChangeDetectorRef, Component, Input, OnChanges, OnInit } from '@angular/core';
import { news } from 'src/app/models/news';
import { NewsapiService } from '../app/service/newsapi.service';

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.css']
})
export class TopStoriesComponent implements OnInit,OnChanges {

  constructor(private api: NewsapiService,private cdr: ChangeDetectorRef) { }
  @Input() categoryInput: string ='World';
  public newsList: news[] = [];
  public pageRefreshed = false;
  public isLoading = false;
  ngOnInit(): void {
    this.getNewsData();
  }
  ngOnChanges() {
    this.getNewsData();
  }

  getNewsData()
  {
    this.isLoading = true;
    this.newsList=[];
    this.api.topHeadlines(this.categoryInput).subscribe(result => {
      console.log(result);
      result?.results.forEach((element: any) => {
        var newsObj = {
          title : element?.title,
          imageurl: element?.multimedia && element?.multimedia[0] ? element?.multimedia[0]?.url : null,
          url: element?.url
        }
      this.newsList.push(newsObj);
      });
    })    
    this.pageRefreshed = !this.pageRefreshed;
    this.isLoading = false;
    this.cdr.detectChanges();
  }
  newsCategorySelected(category: any)
  {
    this.categoryInput = category;
    this.getNewsData();
  }

}
