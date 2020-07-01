import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'; // after create the auth service which is responsable to connect the front and form with the back end api(the AuthService class), we can import it here, therefore, we can connect the service to the compoentn 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {}// set this empty variable and bind the input 
  constructor(private _auth:AuthService) {// inject the AuthService class which is used to connect the  front and form with the back end api

  }

  ngOnInit(): void {
  }

  registerUser(){//this is the register user method/function.  
    // this store the registered user data which was just submitted from the website to the registerUserData
    this._auth.registerUser(this.registerUserData)
    .subscribe( // uses observiable //when using ths obserable, we either get a response or error
      res => console.log(res),// if get response, we can use the response 
      err =>console.log(err)// if get error, when show something to indicate the error


    )
  }
}
