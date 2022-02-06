import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostproductserviceService {
  body:any;
  constructor(private http:HttpClient) { }

  postProduct(cartarray:any){
    this.body = cartarray;
    return this.http.post('http://localhost:3000/carts',this.body);
  }
}
