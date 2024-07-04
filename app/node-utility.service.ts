import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NodeUtilityService {
  
  constructor(private httpClient:HttpClient) { }
  url:string="http://10.10.5.64:5000/";
  login(email: string, password: string): Observable<any> {
    return this.httpClient.get(
      this.url + 'userlogin?email=' + email + '&password=' + password
    );
  }
  delete(email: string, password: string): Observable<any> {
    return this.httpClient.get(
      this.url + 'delete?email=' + email + '&password=' + password
    );
  }
  delete1(amount:number,category: string, date: string): Observable<any> {
    return this.httpClient.get(
      this.url + 'del?amount=' + amount + '&category=' + category + '&date=' + date
    );
  }

  display1(user:string):Observable<any>{
    return this.httpClient.get(this.url+'findone?user='+ user);
    
  }


  insert(name: string, 
        email:string, 
        age: number, 
        gender: string, 
        phone: number, 
        password:string, 
        confirm_password:string
  ):Observable<any> {
    return this.httpClient.get(
    this.url + 
    'register?name=' + 
    name + 
    '&email=' + 
    email +
    '&age=' + 
    age + 
    '&gender=' + 
    gender + 
    '&phone=' + 
    phone +
     '&password=' + 
     password + 
    '&confirm_password=' + 
    confirm_password 
    );
  }
  insert1(
    user:string,category: string, 
    amount:number,
    date:string
):Observable<any> {
return this.httpClient.get(
this.url + 
'main?user='+user+'&category=' + 
category + 
'&amount=' + 
amount +
'&date=' +
date
);
}

}
