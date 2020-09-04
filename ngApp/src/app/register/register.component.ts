import { Component, OnInit } from '@angular/core';
import{ Router} from '@angular/router';//import the router in order to navigate the from register  to specail event
import {AuthService} from '../auth.service'; // after create the auth service which is responsable to connect the front and form with the back end api(the AuthService class), we can import it here, therefore, we can connect the service to the compoentn 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = { email: '', password: '', cart: [], history: [], verified: 'no', resetPasswordToken: "", resetPasswordExpires: Date(),admin:false};// set this empty variable and bind the input 
  constructor(private _auth:AuthService,private _router: Router) {// inject the AuthService class which is used to connect the  front and form with the back end api
// inject the router in order to use it for navigation
  }

  ngOnInit(): void {
  }

  registerUser(){//this is the register user method/function.  
    // this store the registered user data which was just submitted from the website to the registerUserData
    this._auth.registerUser(this.registerUserData)
    .subscribe( // uses observiable //when using ths obserable, we either get a response or error
      res => {
        console.log(res)
        localStorage.setItem('token', res) 
        this._router.navigate(['/VerificationPage'])// use the router to navigate if register success
      },// if get response, we can use the response which depends on the res.status(200).send(} in the api.js. in my case, I send token to here as response
      err =>console.log(err)// if get error, when show something to indicate the error
    )
  }
}
