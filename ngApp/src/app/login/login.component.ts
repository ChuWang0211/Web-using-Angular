import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginUserData={email: '', password: ''};
  constructor(private _auth:AuthService) { }

  ngOnInit(): void {
  
  }
  loginUser(){
    this._auth.loginUser(this.loginUserData)
    .subscribe( // uses observiable //when using ths obserable, we either get a response or error
      res => console.log(res),// if get response, we can use the response 
      err =>console.log(err)// if get error, when show something to indicate the error
    )
    }

}
