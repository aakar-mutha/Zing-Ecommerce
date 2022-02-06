import { Component, Input, OnInit,AfterViewInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdateproductService } from '../updateproduct.service';

@Component({
  selector: 'app-modalform',
  templateUrl: './modalform.component.html',
  styleUrls: ['./modalform.component.css']
})
export class ModalformComponent{

  @Input() pname:any;
  @Input() pimg:any;
  @Input() pdesc:any;
  @Input() pprice:any;
  @Input() pid:any;
  addproductform: any;
  constructor(public activeModal: NgbActiveModal,private formbuilder: FormBuilder, private updateproductservice: UpdateproductService) {
    this.addproductform = this.formbuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
    });
    this.addproductform.patchValue({
      title:this.pname,
      description:this.pdesc,
      price:this.pprice
    })
    
  }
  get title() {
    return this.addproductform.get('title');
  }
  get description() {
    return this.addproductform.get('description');
  }
  get price() {
    return this.addproductform.get('price');
  }

  AfterViewInit(){
    this.addproductform.patchValue({"title": this.pname});
  }
  
  update(){
    let prod = {
      productId:this.pid,
      title:this.addproductform.value.title,
      description:this.addproductform.value.description,
      price:this.addproductform.value.price,
    }
    console.log(this.addproductform.value);
    this.updateproductservice.updateproduct(prod).subscribe(data=>{
      alert('Product Updated Successfully');
      this.activeModal.close();
      window.location.reload();
    });
  }

}