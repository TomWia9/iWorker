import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUser = this.authService.getCurrentValue();
   
    if(currentUser == null){
      this.router.navigate(['/login']);
      return false;
    }
   
    if(currentUser.userID === 0){ //admin has id = 0
      return true;
    } 

    else{
      this.router.navigate(['']);
      return false;
    } 
    
    
  }
  
}
