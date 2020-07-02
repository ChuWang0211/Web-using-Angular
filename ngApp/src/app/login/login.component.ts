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
      res => {
        console.log(res)
        localStorage.setItem('token', res.token) // store the token in the local storage in the website. I can check it by opening the web developer tool and take look at the local storage tab
      },// if get response, we can use the response which depends on the res.status(200).send(} in the api.js. in my case, I send token to here as response
      err =>console.log(err)// if get error, when show something to indicate the error
    )
    }

}
