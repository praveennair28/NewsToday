import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { news } from '../models/news';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-search-news',
  templateUrl: './search-news.component.html',
  styleUrls: ['./search-news.component.css']
})
export class SearchNewsComponent implements OnInit {
  public startdate : string = '';
  public endtdate : string = '';

  public newsList: news[] = [];
  public pageRefreshed = false;
  public isLoading = false;

  constructor(private api: NewsapiService,private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }
 
  Search(data: string)
  {
    this.isLoading = true;
    this.newsList=[];
    this.api.Search(data).subscribe( (result: any) => {
        console.log(result);
        result?.response?.docs?.forEach((element: any) => {
          var newsObj = {
            title : element?.abstract,
            imageurl:'',// element?.multimedia && element?.multimedia[0] ? element?.multimedia[0]?.url : null,
            url: element?.web_url
          }
        this.newsList.push(newsObj);
      });
    })    
    this.pageRefreshed = !this.pageRefreshed;
    this.cdr.detectChanges();
  }

}
