import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AddProductServiceService } from './add-product-service.service';
import { ImageUploadServiceService } from './uploadimage/image-upload-service.service';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  addproductform: any;
  link:any;
  loading: boolean = false; // Flag variable
  file:any;
  a:string = '';
  constructor(private formbuilder: FormBuilder, private addproductService: AddProductServiceService,
    private fileUploadService: ImageUploadServiceService) {
    this.addproductform = this.formbuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required]],
      image : ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
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
  get image() {
    return this.addproductform.get('image');
  }

   postproduct() {
    this.loading = !this.loading;
    console.log(this.file);
    
    
    console.log(this.link);
    setTimeout(() => {
      
    }, 2000);
    
    this.addproductService.postData(
      {
        userId : localStorage.getItem('userId'),
        title:this.addproductform.value.title,
        description:this.addproductform.value.description,
        price:this.addproductform.value.price,
        image:this.link
      }
    ).subscribe((res: any) => {
      console.log(res);
      if (res.message) {
        alert('Product Added Successfully');
        this.addproductform.reset();
      }
      else {
        alert('Product Not Added');
        this.addproductform.reset();
      }
    });
  }
 
  onChange(event:any) {
    this.file = event.target.files[0];
    this.fileUploadService.upload(this.file).subscribe(
      (data) => {
        console.log(data);
      this.link = data.response.path;
      }
    );
}

// OnClick of button Upload



}
