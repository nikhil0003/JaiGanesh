import { Injectable, } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

      checkLogin(user :string,pass: string) : Observable<Object>{
let url = "http://localhost:8080/token";

let encodeCredital = btoa(user +":"+pass);
let basicHeader = "Basic " + encodeCredital;
let  httpHeader = new HttpHeaders({
  'Authorization' : basicHeader,
  'content-type' :'application/json'
});
 return this.http.get(url,{headers:httpHeader});

  }

  checkActive() : Observable<Object> {
    let url = "http://localhost:8080/checkSession";
    let auth = localStorage.getItem('hello');
    if(auth !==null){
      let  httpHeader = new HttpHeaders({
        'X-Auth-Token' : auth,
        'content-type' :'application/json'
      });
      return this.http.get(url,{headers:httpHeader});
    }
    else {
      return this.http.get(url);
    }
      }

      offActive() : Observable<Object> {
        let url = "http://localhost:8080/checkLogout";
        let auth = localStorage.getItem('hello');
        if(auth !==null){
          let  httpHeader = new HttpHeaders({
            'X-Auth-Token' : auth,
            'content-type' :'application/json'
          });
          return this.http.get(url,{headers:httpHeader});
        }
        else {
          return this.http.get(url);
        }
          }

          register(username :string,password :string)  : Observable<string>{
          let url = "http://localhost:8080/user/create";
          let userdetails = btoa(username +':'+password);
          console.log(userdetails);
          let  httpHeader = new HttpHeaders({
            'content-type' : 'application/json'
          });
          ;
          return this.http.get<string>(url+"/"+userdetails,{headers:httpHeader});

          }
}
