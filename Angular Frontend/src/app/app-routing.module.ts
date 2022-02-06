import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
// import { SellerhomeComponent } from './sellerhome/sellerhome.component';
import { AuthguardGuard } from './guard/authguard.guard';
import { RoleguardGuard } from './guard/roleguard.guard';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'userdash',loadChildren:()=> import("../app/userdash/userdash.module").then(m=>m.UserdashModule)},
  { path: 'sellerdash', canActivate:[RoleguardGuard], data:{expectedRoles:['seller']} , loadChildren: () => import('./sellerdash/sellerdash.module').then(m => m.SellerdashModule) },
  {path:'**',redirectTo:'userdash',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule ]
})
export class AppRoutingModule { }
