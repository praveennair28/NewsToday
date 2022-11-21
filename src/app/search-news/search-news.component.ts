import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { news } from '../models/news';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-search-news',
  templateUrl: './search-news.component.html',
  styleUrls: ['./search-news.component.css']
})
export class SearchNewsComponent implements OnInit {
  public searchKeyInvalid : boolean = false;
  public newsList: news[] = [];
  public pageRefreshed = false;
  public isLoading = false;

  constructor(private api: NewsapiService,private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getNewsData();
  }
  getNewsData()
  {
    this.isLoading = true;
    this.newsList=[];
    this.api.topHeadlines("World").subscribe(result => {
      console.log(result);
      result?.results.forEach((element: any) => {
        var newsObj = {
          title : element?.title,
          imageurl: element?.multimedia && element?.multimedia[0] ? element?.multimedia[0]?.url : null,
          url: element?.url
        }
      this.newsList.push(newsObj);
      this.isLoading = false;
      });
    })    
    this.pageRefreshed = !this.pageRefreshed;
    this.cdr.detectChanges();
  }

  Search(data: any)
  {
    if(!data['search-key']){
      this.searchKeyInvalid = true;
    }
    else{
    this.isLoading = true;
    this.searchKeyInvalid = false;
    this.newsList=[];
    this.api.Search(data['search-key']).subscribe( (result: any) => {
        console.log(result);
        result?.response?.docs?.forEach((element: any) => {
          var newsObj = {
            title : element?.abstract,
            imageurl:"https://static01.nyt.com/images/2022/11/17/world/00uk-protest-1/merlin_215540562_15aef460-14ef-4b4a-aaef-cb7ae3bf0581-superJumbo.jpg",//element?.multimedia && element?.multimedia.length > 0 && element?.multimedia[0] ? element?.multimedia[0]?.url : null,
            url: element?.web_url
          }
        this.newsList.push(newsObj);
        this.isLoading = false;
      });
    })    
    this.pageRefreshed = !this.pageRefreshed;
    this.cdr.detectChanges();
  }
}

}
