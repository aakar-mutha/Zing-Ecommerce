import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginserviceService } from '../login/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: any;
  resp: any;
  i: any;
  tosend:any;
  constructor(private formbuilder: FormBuilder, private loginService: LoginserviceService, private router: Router) {
    this.loginform = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(6)]]
    });

    if(localStorage.getItem('role')){
      this.router.navigate(['/'+localStorage.getItem('role')+'dash']);
    }
  }

  get email() {
    return this.loginform.get('email');
  }
  get pass() {
    return this.loginform.get('pass');
  }
  
  onLogin() {
    this.tosend = {
      email: this.loginform.value.email,
      pass: this.loginform.value.pass
    }
    this.loginService.getData(this.tosend).subscribe(res => {
      this.resp = res;
      console.log(this.resp);
      if (this.resp.status == 200) {
        localStorage.setItem('role', this.resp.role);
        localStorage.setItem('email', this.resp.email);
        localStorage.setItem('fname', this.resp.fname);
        localStorage.setItem('lname', this.resp.lname);
        localStorage.setItem('mobile', this.resp.mobile);
        localStorage.setItem('userId', this.resp.userId);
        
        this.router.navigate(['/'+this.resp.role+'dash']);
      }
    },
      err => {
        alert('Invalid Credentials');
        this.loginform.reset();
      });
  }

  ngOnInit(): void {
   
  }

}
