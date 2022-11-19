import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private _http: HttpClient) { }

  api_key = "9iyierZ48eVRAJK9aq2maqvPNH2vzvpI";
  topStoriesApi = "https://api.nytimes.com/svc/topstories/v2/";
  searchApi = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

  topHeadlines(category: string): Observable<any>{
    const header = new HttpHeaders().set('accept', 'text/plain')
                          .set('Content-Type', 'application/json')
                          //.set('Authorization','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njg4NTI0MjAsImV4cCI6MTY2ODg1NjAyMH0.EOWrlHogufnQYiVGfQPS0wPraaSqFHkpnAM-X2VkvNY');
    const httpParams = new HttpParams().set('api-key', this.api_key)
    const options = { params: httpParams, header };    
    return this._http.get(this.topStoriesApi + category + ".json?",options);
  }  
  Search(searchKey: any): Observable<any>{
    const header = new HttpHeaders().set('accept', 'text/plain')
                          .set('Content-Type', 'application/json')
    const httpParams = new HttpParams().set('api-key', this.api_key)
                      .set('begin_date', "20120101")
                      .set('end_date', "20121231")

    const options = { params: httpParams, header };    
    return this._http.get(this.searchApi,options);
  }  
}
