import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http:HttpClient) {
    
   }
    getData(data:any) {
      return this.http.get('http://localhost:3000/login',{params:data});
    }
}
