import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';// use CanActive to return guard boolean and Router to navigave
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {// check login by checking the key from local storage
constructor(private _authService: AuthService, private _router:Router
  ){}

  canActivate():boolean{//check login by checking the key from local storage
if(this._authService.loggedIn()){ // if the loggedIn() in AuthService return true
  return true
}else{
  this._router.navigate(['/login'])// if the loggedIn() in AuthService return false. navigate  to the login 
  return false
}

  }
}
