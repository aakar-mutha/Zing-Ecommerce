import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerdashComponent } from './sellerdash.component';
import { SellerhomeComponent } from './sellerhome/sellerhome.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';

const routes: Routes = [
  { path: '', component: SellerdashComponent, children: [
    { path: '', component: SellerhomeComponent },
    { path: 'addproduct', component: AddproductComponent },
    { path: 'viewproducts', component: ViewproductsComponent }

  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerdashRoutingModule { }
