import { Injectable,Injector } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http' // I can implement this that can help extract info form http to the front end and convert it to the form my database accept
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector: Injector) { }
  intercept(req,next){// intercept is a required argument by HttpInterceptor, it takes two argument, req and next to pass on execution
    let authService = this.injector.get(AuthService)
    let tokenizedReq = req.clone({ // make a clone of the request
      setHeaders:{ //and to the request, add to the header the authoiration infomaiton 
        Authoirzation: `Bearer ${authService.getToken()}` // it is buggy to inject AuthService, therefore, I import injector then I use this line of code.
        // after import Injector, I can use this instead of the below to fetch token
      // the format is Bearer xx.yy.zz (Bearer + the token format)
      }
    })
    return next.handle(tokenizedReq)
  }
}
