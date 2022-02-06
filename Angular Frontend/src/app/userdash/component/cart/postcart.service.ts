import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostcartService {
  body:any;
  constructor(private http:HttpClient) { }

  updateCart(cartarray:any){
    this.body = cartarray;
    return this.http.post('http://localhost:3000/carts/delete',this.body);
  }

  payCart(cartarray:any){
    this.body = cartarray;
    return this.http.post('http://localhost:3000/carts/pay',this.body);
  }
}
