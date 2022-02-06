import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserdashRoutingModule } from './userdash-routing.module';
import { UserdashComponent } from './userdash.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ViewproductsComponent } from './component/viewproducts/viewproducts.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserdashComponent,
    CartComponent,
    ProductsComponent,
    ViewproductsComponent
  ],
  imports: [
    CommonModule,
    UserdashRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatSidenavModule,
    FormsModule

  ]
})
export class UserdashModule { }
