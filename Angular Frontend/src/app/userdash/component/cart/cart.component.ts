import { Component, OnInit } from '@angular/core';
import { GetcartserviceService } from './getcartservice.service';
import { GetproductserviceService } from '../products/getproductservice.service';
import { PostcartService } from './postcart.service';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCashRegister } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartdata: any;
  cartdata1: Cart[] = [];
  cartdata2: Cart[] = [];
  products: any;
  count: number = 0;
  idn: number = 0;
  trashicon = faTrash;
  loginstate: boolean = true;
  total:number = 0;
  payicon = faCashRegister;
  userId:any;
  cartempty = true;
  constructor(getcart: GetcartserviceService, getproduct: GetproductserviceService, 
    private postcart: PostcartService) {
    this.userId = localStorage.getItem('userId');
    if (localStorage.getItem('role') != null) {
      this.loginstate = false;
    }
    getcart.getCart(this.userId).subscribe((data: any) => {
      this.cartempty = false;
      this.cartdata = data;
      console.log(this.cartdata);
      this.total = 0;
      getproduct.getProduct().subscribe((res: any) => {
        this.products = res;
        for (let i = 0; i < this.cartdata.length; i++) {
          for (let j = 0; j < this.cartdata[i].products.length; j++) {
            for (let k = 0; k < res.length; k++) {
              if (this.cartdata[i].products[j].productId == res[k].productId) {
                res[k].quantity = this.cartdata[i].products[j].quantity;
                this.cartdata1.push(res[k]);
              }
            }
          }
        }
        for (let i = 0; i < this.products.length; i++) {
          this.count = 0;
          for (let j = 0; j < this.cartdata1.length; j++) {
            if (this.products[i].productId == this.cartdata1[j].productId) {
              this.count += this.cartdata1[j].quantity;
              this.idn = j;
            }
          }
          if (this.count > 0) {
            this.cartdata1[this.idn].quantity = this.count;
            this.cartdata2.push(this.cartdata1[this.idn]);
            this.total += this.cartdata1[this.idn].price * this.cartdata1[this.idn].quantity;
          }
        }
      } 
    );
    }, (err) =>{
      console.log(err);
      this.cartempty = true;
    }
    );
    for(let i = 0; i < this.cartdata2.length; i++){
      this.total += this.cartdata2[i].price * this.cartdata2[i].quantity;
    }
  }
  delitem(productId: any) {
    console.log(productId);

    for (let i = 0; i < this.cartdata2.length; i++) {
      if (this.cartdata2[i].productId == productId) {
        this.cartdata2.splice(i, 1);
      }
    }
    this.total = 0;
    for (let i = 0; i < this.cartdata2.length; i++) {
      this.total += this.cartdata2[i].price * this.cartdata2[i].quantity;
    }
    if(this.total == 0){
      this.cartempty = false;
      window.location.reload();
    }
    let updatedcart = {
      userId: this.userId,
      products: this.cartdata2
    }
    console.log(updatedcart);
    this.postcart.updateCart(updatedcart).subscribe((res: any) => {
      console.log(res);
    });
  // window.location.reload()
  }
  ngOnInit() { }

  pay(){
    let cartpay = {
      userId: this.userId,
      products: this.cartdata2,
      total: this.total
    }
    this.postcart.payCart(cartpay).subscribe((res: any) => {
      console.log(res);
      alert("Payment Successful");
      window.location.reload();
    });
  }
}

export interface Cart {
  productId: string;
  title: string;
  price: number;
  description: string;
  image: string;
  quantity: number;
}
