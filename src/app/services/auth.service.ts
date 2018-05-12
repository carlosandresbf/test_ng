import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import { Jsonp } from '@angular/http';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  checkSession():boolean{
    return sessionStorage.getItem('rsltnsri')?true:false;
  }

  returnToken(): string {
    let tk = sessionStorage.getItem('rsltnsrt');
    return tk;
  }


  
  activeSession(Authorization: string ):Observable<boolean>{
    return this.http.post<any>(`${environment.api_url}/auth/me`, '', { headers: new HttpHeaders().set('Authorization', Authorization)}).do(data => {
      sessionStorage.setItem('rsltnsri', btoa(JSON.stringify(data.user)));
    });
  }


  Login(credentials: {email: string, password: string}):Observable<boolean>{
    return this.http.post<any>(`${environment.api_url}/auth/login`, credentials).do(data=>{
      sessionStorage.clear();
      sessionStorage.setItem('rsltnsrt', data.token);
      sessionStorage.setItem('rsltnsri', btoa(JSON.stringify(data.user)));
    });
  }
}
