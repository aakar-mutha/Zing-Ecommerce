import { Component, OnInit } from '@angular/core';
import { GetproductserviceService } from './getproductservice.service';
import { PostproductserviceService } from './postproductservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  a: Product[] = [];
  check = false;
  productlist: any;
  products: any;
  userId = localStorage.getItem('userId');
  cart: any;
  loggedin = localStorage.getItem('role');
  
  constructor(private getproductservive: GetproductserviceService,
    private postproductservice: PostproductserviceService,private router:Router) {
    this.getproductservive.getProduct().subscribe(data => {
      this.productlist = data;
    });
    try {
      this.userId = localStorage.getItem('userId');
      
    }
    catch (e) {
      console.log(e);
    }
  }

  addtocart(pid: any) {
    if (this.loggedin) {
      console.log(pid);
      for (let i = 0; i < this.a.length; i++) {
        if (this.a[i].productId == pid) {
          this.check = true;
          this.a[i].quantity += 1;
          this.cart = {
            userId: this.userId,
            products: this.a
          }
          
          this.postproductservice.postProduct(this.cart).subscribe(data => {
          
          });
          break;
        }
      }
      if (!this.check) {
        this.a.push({
          productId: pid,
          quantity: 1
        });
        this.cart = {
          userId: this.userId,
          products: this.a
        }
        this.postproductservice.postProduct(this.cart).subscribe(data => {
          // alert("Product added to cart");
        });
      }
      console.log(this.cart);
    }
    window.location.reload();
  }
  
  viewproduct(pid:any,title:any,image:any,desc:any,price:any) {
    console.log(pid,title,image,desc,price);
    let product = {
      productId: pid,
      title: title,
      image: image,
      description: desc,
      price: price
  }
  sessionStorage.setItem('product',JSON.stringify(product));
  // this.router.navigate(['/viewproduct']);
}

  ngOnInit(): void {
  }

}

export interface Product {
  productId: string;
  quantity: number;
}
