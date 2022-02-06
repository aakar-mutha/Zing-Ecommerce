import { Component, OnInit } from '@angular/core';
import { PostproductserviceService } from '../products/postproductservice.service';
import { GetproductserviceService } from '../products/getproductservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {
  a: Product[] = [];
  check = false;
  productlist: any;
  products: any;
  userId = localStorage.getItem('userId');
  cart: any;
  loggedin = localStorage.getItem('role');
  product: any;
  quant = "QUANTITY";
  constructor(private getproductservive: GetproductserviceService,
    private postproductservice: PostproductserviceService, private router: Router) {
    this.getproductservive.getProduct().subscribe(data => {
      this.productlist = data;
    });
    try {
      this.userId = localStorage.getItem('userId');
      this.product = sessionStorage.getItem('product')
      this.product = JSON.parse(this.product);
    }
    catch (e) {
      console.log(e);
    }
  }

  addtocart(selectform: any, pid: any) {
    if (this.loggedin) {
      // console.log(pid);
      sessionStorage.removeItem('product');
      for (let i = 0; i < this.a.length; i++) {
        if (this.a[i].productId == pid) {
          this.check = true;
          this.a[i].quantity += Number(selectform.value.quantity);
          this.cart = {
            userId: this.userId,
            products: this.a
          }
          this.postproductservice.postProduct(this.cart).subscribe(data => {
          });
        }
      }
      if (!this.check) {
        this.a.push({
          productId: pid,
          quantity: Number(selectform.value.quantity)
        });
        this.cart = {
          userId: this.userId,
          products: this.a
        }
        this.postproductservice.postProduct(this.cart).subscribe(data => {
        });
      }
    }
    window.location.reload();
  }

  ngOnInit(): void {
  }
}
export interface Product {
  productId: string;
  quantity: number;
}
