import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{ Router} from '@angular/router';
import { AppComponent } from './app.component';
import { EventService } from './event.service';

// the auth service contains login and registration
// making http request
// the registerUser(user) method accpets a user object and returns the response that the back end api sends whenever it is avaliable.
// in this case, the back end api response with either error or the user (the response are set on the E:\Angular Authentication\server\routes\api.js)

@Injectable()

export class AuthService { // this is a AuthService class
  private _registerUrl= "http://localhost:3000/api/register" // this is a variable that stored the backend API url
  private _loginUrl= "http://localhost:3000/api/login"
  private _addItemToCart= "http://localhost:3000/api/cart"
  private _addCartToDatabase= "http://localhost:3000/api/addCartToDatabase"
  private _verifyUser= "http://localhost:3000/api/confirmation"
  private _orderHistory= "http://localhost:3000/api/orderHistory"
  private _adminViewUserOrderHistory= "http://localhost:3000/api/adminViewUserOrderHistory"
  private _forgetPassword = "http://localhost:3000/api/forgetPassword"
  private _changePassword = "http://localhost:3000/api/changePassword"
  private _selectedUserOrderHistory = "http://localhost:3000/api/userHistoryOrders"
  private _adminItemManagePage = "http://localhost:3000/api/adminItemManagePage"
  private _publishItem = "http://localhost:3000/api/publishItem"
  private _getItem = "http://localhost:3000/api/getItem"
  private _adminEditItem = "http://localhost:3000/api/adminEditItem"
  private _adminDeletItem = "http://localhost:3000/api/adminDeletItem"
  
  constructor(private http:HttpClient, private _router: Router) { }
  registerUser(user){ // this method which needs a user object(json) prameter (user object is the email and the password)
    return this.http.post<any>(this._registerUrl,user)// in the function, we make a post request and returned the observerable. the first argument is the url, and the second argument is the user object/json 
  } 

  loginUser(user){
    return this.http.post<any>(this._loginUrl,user)
  }

  logoutUser(){ 
    localStorage.removeItem('token')// if log out, token is removed
    localStorage.removeItem('admin')
    localStorage.removeItem('changePassword')
    this._router.navigate(['/events'])// then it is navigate to events page
  }
  loggedIn(){
    return !!localStorage.getItem('token')// "!!" means if token exist, return ture else return false
  } 
  getToken(){
    return localStorage.getItem('token')
  }
  getItemId(){
  return localStorage.getItem('idItemDetail')
  }
  putItemIntoCart(token){
    return this.http.post<any>(this._addItemToCart,token)
  }
  addToDatavase(userObject){
    console.log(userObject)
    return this.http.post<any>(this._addCartToDatabase,userObject)
  }

  getCart(token){
    return  this.http.post<any>(this._addItemToCart,token)
  }
  verifyUser(token){
    return  this.http.post<any>(this._verifyUser,token)
  }
  getOrderHistory(token){
    return  this.http.post<any>(this._orderHistory,token)
  }
  getallUsers(token){
    return  this.http.post<any>(this._adminViewUserOrderHistory,token)
  }
  isAdmin(){
    if(localStorage.getItem('admin')==null){return false}else{return true}}

  selectedUserOrderHistory(email){
    console.log(email)
    return  this.http.post<any>(this._selectedUserOrderHistory,email)
  }
  checkIfEmailExist(email) {
    console.log(email)
    return this.http.post<any>(this._forgetPassword, email)
  }
  updatePassword(token_password) {
    return this.http.post<any>(this._changePassword, token_password)
  }
  adminAddItem(item){
    console.log(item)
    return this.http.post<any>(this._publishItem, item) 
  }
  adminGetAllItem(token){
    return this.http.post<any>(this._adminItemManagePage, token) 
  }
  verifyItem(id){
    return this.http.post<any>(this._getItem, id) 
  }
 editItem(id){
  return this.http.post<any>(this._adminEditItem, id) 
  
 }
 adminDeleteItem(id){
  return this.http.post<any>(this._adminDeletItem, id) 
 }

}
