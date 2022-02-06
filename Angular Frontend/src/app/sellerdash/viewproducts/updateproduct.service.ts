import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UpdateproductService {

  constructor(private http:HttpClient) { }
  updateproduct(data:any){
    console.log(data);
    return this.http.post('http://localhost:3000/products/update',data);
  }
}
