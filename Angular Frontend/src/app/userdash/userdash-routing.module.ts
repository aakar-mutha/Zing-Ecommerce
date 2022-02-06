import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdashComponent } from './userdash.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { ViewproductsComponent } from './component/viewproducts/viewproducts.component';

const routes: Routes = [{ path: '', component: UserdashComponent ,children:[
  { path: 'cart', component: CartComponent },
  { path: '', component: ProductsComponent },
  { path: 'viewproduct', component: ViewproductsComponent }

]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserdashRoutingModule { }
