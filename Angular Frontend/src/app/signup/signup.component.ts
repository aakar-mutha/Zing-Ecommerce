import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupserviceService } from './signupservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupform: any;
  err:any
  constructor(formbuilder: FormBuilder, private http: HttpClient, private router: Router, private signupservice: SignupserviceService) {
    this.signupform = formbuilder.group({
      fname: ['', [Validators.required, Validators.minLength(4)]],
      lname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*')]],
      email: ['', [Validators.required, Validators.email]],
      mnum: ['', [Validators.required, Validators.pattern('^[0-9]*')]],
      pass: ['', [Validators.required, Validators.minLength(6)]],
    });
  }


  get fname() {
    return this.signupform.get('fname');
  }
  get lname() {
    return this.signupform.get('lname');
  }
  get email() {
    return this.signupform.get('email');
  }
  get mnum() {
    return this.signupform.get('mnum');
  }
  get pass() {
    return this.signupform.get('pass');
  }

  onSignup() {
    console.log(this.signupform.valid);
    if (this.signupform.valid) {
      console.log('form submitted');    
      this.signupservice.signup(this.signupform.value).subscribe(res => {
        console.log(res);
        alert('Signup Successful');
        this.router.navigate(['/login']);
      }, err => {
        alert('Signup Failed' + err.error.message);
      });
        
    }
  }

  ngOnInit(): void {
  }
}
