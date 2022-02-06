import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sellerdash',
  templateUrl: './sellerdash.component.html',
  styleUrls: ['./sellerdash.component.css']
})
export class SellerdashComponent implements OnInit {
  @ViewChild('sidenav') sidenav: any;
  constructor(private ovserver:BreakpointObserver, private router: Router) {
   }

  name = localStorage.getItem('fname') + ' ' + localStorage.getItem('lname');
  ngAfterViewInit() {
    this.ovserver.observe(['(max-width: 800px)']).subscribe(res => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      }
      else{
        this.sidenav.mode = "side";
        this.sidenav.open();
      }
    });
  
  }
  logout() {
    localStorage.clear();
    // localStorage.setItem('role', 'user');
    this.router.navigate(['/userdash']);
  }
  ngOnInit(): void {
  }

}
