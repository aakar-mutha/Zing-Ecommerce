import { Component, OnInit } from '@angular/core';
import { GetdetailsService } from './getdetails.service';
@Component({
  selector: 'app-sellerhome',
  templateUrl: './sellerhome.component.html',
  styleUrls: ['./sellerhome.component.css']
})
export class SellerhomeComponent implements OnInit {
totalsales:number =  0;
totalorders = 0;
totalordersshipped = 0;
totalearnings = 0;
userId = localStorage.getItem('userId');
  constructor(protected getdetails:GetdetailsService) { 
    getdetails.getDetails(localStorage.getItem('userId')).subscribe((data:any)=>{
      console.log(data);
      data.forEach((element:any) => {
        element.products.forEach((element1:any) => {
          if(element1.userId === this.userId){
          console.log(element1.userId);
          console.log(element1.price * element1.quantity);
          this.totalsales += Number(element1.price * element1.quantity);
          this.totalorders += 1;
          this.totalordersshipped += element1.quantity;
          }
        });
    })
    
      this.totalearnings = this.totalsales * 0.25;
      // this.totalSales=data.totalSales;
      // this.totalProducts=data.totalProducts;
    });
  }

  ngOnInit(): void {
  }

}
