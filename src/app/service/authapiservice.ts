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
    login_url = "http://localhost:8000/auth/login";
    register_url = "http://localhost:8000/auth/register";  

  Login(user: user): Observable<any>{
    const head = new HttpHeaders({ 'No-Auth': 'True' });
    head.append('Content-Type', 'application/json');
    const options = { params: null, withCredentials: true, head };

    const httpOptions : Object = {
      headers: new HttpHeaders({        
        'Content-Type': 'application/json; charset=utf-8'
      }),
    };    
    return this._http.post(this.login_url,user,httpOptions);
  }

  Register(user: user): Observable<any>{
    const head = new HttpHeaders({ 'No-Auth': 'True' });
    head.append('Content-Type', 'application/json');
    const options = { params: null, withCredentials: true, head };

    const httpOptions : Object = {
      headers: new HttpHeaders({        
        'Content-Type': 'application/json; charset=utf-8'
      }),
    };    
    return this._http.post(this.register_url,user,httpOptions);
  }

  refreshToken(): Observable<any>{
    //ToDo
    return this._http.get(this.login_url);
  }
}
