import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


// the auth service contains login and registration
// making http request
// the registerUser(user) method accpets a user object and returns the response that the back end api sends whenever it is avaliable.
// in this case, the back end api response with either error or the user (the response are set on the E:\Angular Authentication\server\routes\api.js)

@Injectable()

export class AuthService { // this is a AuthService class
  private _registerUrl= "http://localhost:3000/api/register" // this is a variable that stored the backend API url
  private _loginUrl= "http://localhost:3000/api/login"
  constructor(private http:HttpClient) { }
  registerUser(user){ // this method which needs a user object(json) prameter (user object is the email and the password)
    return this.http.post<any>(this._registerUrl,user)// in the function, we make a post request and returned the observerable. the first argument is the url, and the second argument is the user object/json 
  } 

  loginUser(user){
    return this.http.post<any>(this._loginUrl,user)
  }

  loggedIn(){
    return !!localStorage.getItem('token')// "!!" means if token exist, return ture else return false
  }
  getToken(){
    return localStorage.getItem('token')
  }
}
  