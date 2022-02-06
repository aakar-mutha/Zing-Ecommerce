import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleguardGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    return this.isAuthorised(route);
  }
  
  private  isAuthorised(route: ActivatedRouteSnapshot,): boolean {
    const role = localStorage.getItem('role');
    const expectedRole = route.data['expectedRoles'];
    console.log();

    if (expectedRole.find((roles:any) => roles == localStorage.getItem('role'))) {
      return true;
    }
    else{
      return false;
    }
  }
}
