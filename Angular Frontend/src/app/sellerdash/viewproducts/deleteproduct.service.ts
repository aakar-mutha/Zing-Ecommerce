import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DeleteproductService {

  constructor(private http:HttpClient) {}

  deleteproduct(pid:any){
    return this.http.post('http://localhost:3000/products/delete',{productId:pid});
  }
}
