import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetcartserviceService {

  constructor(private http:HttpClient) { }

  getCart(userId:any){
    return this.http.get('http://localhost:3000/carts',{params:{userId:userId}});
  }
}
