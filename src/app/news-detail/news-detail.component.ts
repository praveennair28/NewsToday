import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  @Input() imageurl: string = '';
  @Input() title: string = '';
  @Input() data: string = '';
  @Output() goBack = new EventEmitter<any>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  RouteBack()
  {
    this.goBack.emit(true);
  }
}
