import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SignupserviceService {
  body:any;
  constructor(private http:HttpClient) { }

  signup(data:any){
    // console.log(data);  
    this.body = data;
    return this.http.post('http://localhost:3000/signup',this.body);
  }
}
