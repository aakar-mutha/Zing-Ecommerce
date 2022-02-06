import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetproductserviceService {
  constructor(private http:HttpClient) { }

  getProduct(userId:any) {
  
  return this.http.get('http://localhost:3000/products/',{params:{userId:userId}});
  }
}
