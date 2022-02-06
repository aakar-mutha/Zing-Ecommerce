import { Component, Input, OnInit } from '@angular/core';
import { GetproductserviceService } from './getproductservice.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteproductService } from './deleteproduct.service';
import { ModalformComponent } from './modalform/modalform.component';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})

export class ViewproductsComponent implements OnInit {
 
  noprodsfound:boolean = false;
  a:Product[] = [];
  check = false;
  productlist:any;
  constructor(private getproductservive:GetproductserviceService,private modalService: NgbModal,
    private deleteproductservice:DeleteproductService)   { 
    this.getproductservive.getProduct(localStorage.getItem('userId')).subscribe(data=>{
      this.productlist=data;
      
    },err=>{
      console.log(err);
      this.noprodsfound=true;
    }
    );
    
  }
  open(pname:any,pdesc:any,pprice:any,pid:any) {
    const modalRef = this.modalService.open(ModalformComponent);
    modalRef.componentInstance.pname = pname;
    modalRef.componentInstance.pdesc = pdesc;
    modalRef.componentInstance.pprice = pprice;
    modalRef.componentInstance.pid = pid;
    // modalRef.componentInstance.pimg = pimg;
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
  deleteprod(pid:any){
    this.deleteproductservice.deleteproduct(pid).subscribe(data=>{
      window.location.reload();
    });
  }
  ngOnInit(): void {
  }

}

export interface Product {
  id: number;
  quantity: number;
}
