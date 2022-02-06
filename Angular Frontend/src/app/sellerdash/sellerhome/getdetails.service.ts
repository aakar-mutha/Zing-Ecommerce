import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetdetailsService {

  constructor(private http:HttpClient) {}

  getDetails(userId:any){
    return this.http.get('http://localhost:3000/totalsales',{params:{userId:userId}});
  }
}
