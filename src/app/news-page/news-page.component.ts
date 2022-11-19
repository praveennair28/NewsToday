import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit {

  constructor(private api: NewsapiService,private cdr: ChangeDetectorRef) { }
  @Input() newsList: any;
  @Input() pageRefreshed: boolean = true;

  ngOnInit(): void {
    this.cdr.detectChanges();
  }
  ngOnChanges() {
    console.log("pageRefreshed",this.pageRefreshed,this.newsList);
    this.cdr.detectChanges();
  }

}
