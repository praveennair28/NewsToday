import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(private _http: HttpClient) { }
    api_key = "9iyierZ48eVRAJK9aq2maqvPNH2vzvpI";
    login_url = "http://localhost:8000/auth/register";
    register_url = "http://localhost:8000/auth/register";

  //topNews='https://newsapi.org/v2/top-headlines?country=us&apiKey=93db02f9184b418b957e511a5733c46a';

  //techNews='https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=93db02f9184b418b957e511a5733c46a'

  getToken(user: user): Observable<any>{
    const head = new HttpHeaders({ 'No-Auth': 'True' });
    head.append('Content-Type', 'application/json');
    const options = { params: null, withCredentials: true, head };

    const httpOptions : Object = {
      headers: new HttpHeaders({
        //'Accept': 'text/html',
        //'No-Auth': 'True',
        'Content-Type': 'application/json; charset=utf-8'
      }),
      //responseType: 'text'
    };
    
    return this._http.post(this.login_url,user,httpOptions);
  }

  refreshToken(): Observable<any>{
    return this._http.get(this.login_url);
  }
}
