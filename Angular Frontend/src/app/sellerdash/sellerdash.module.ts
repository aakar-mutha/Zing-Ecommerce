import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerdashRoutingModule } from './sellerdash-routing.module';
import { SellerdashComponent } from './sellerdash.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SellerhomeComponent } from './sellerhome/sellerhome.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalformComponent } from './viewproducts/modalform/modalform.component';

@NgModule({
  declarations: [
    SellerdashComponent,
    SellerhomeComponent,
    AddproductComponent,
    ViewproductsComponent,
    ModalformComponent
  ],
  imports: [
    CommonModule,
    SellerdashRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatSidenavModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class SellerdashModule { }
