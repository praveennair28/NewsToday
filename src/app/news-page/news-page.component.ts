import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit {
  public isNewsDetail = false;
  public imageurl = '';
  public title = '';
  public data = '';
  p: number = 1;
  
  constructor(private api: NewsapiService,private cdr: ChangeDetectorRef,private router: Router) { }
  @Input() newsList: any;
  @Input() pageRefreshed: boolean = true;
  @Input() origin: string='';

  ngOnInit(): void {
    this.cdr.detectChanges();
  }
  ngOnChanges() {
    console.log("pageRefreshed",this.pageRefreshed,this.newsList);
    this.cdr.detectChanges();
  }
  ReadMore(data: any){
    this.title = data.title;
    this.imageurl = data.imageurl;
    this.data = data.title;
    this.isNewsDetail = true;
  }
  goBack(data: any){
    if(this.origin =='Home')
    {
      this.router.navigateByUrl('Home');
      this.isNewsDetail = false;
    } 
    else if(this.origin=='Search')
    {
      this.router.navigateByUrl('Search');
      this.isNewsDetail = false;
    }
  }

}
