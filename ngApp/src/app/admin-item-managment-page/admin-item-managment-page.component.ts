import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'; 
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import{ Router} from '@angular/router';// import the router in order to navigate the from login to specail event
@Component({
  selector: 'app-admin-item-managment-page',
  templateUrl: './admin-item-managment-page.component.html',
  styleUrls: ['./admin-item-managment-page.component.css']
})
export class AdminItemManagmentPageComponent implements OnInit {
   add=false;
   addItem= {
    name:"",
    description:"",
    date:"",
    imageUrl:"",
    amount: 1,
    price:""}
    id={token:''}
    allItemList=[]
    obj = {}
   constructor(private _auth:AuthService, private _router: Router) { }

  ngOnInit(): void {
    if(this.id.token==null){
      console.log("please login")
      this._router.navigate(['/login'])
    }else{
    this.id.token=localStorage.getItem('token')
    this._auth.adminGetAllItem(this.id)
    .subscribe( // uses observiable //when using ths obserable, we either get a response or error
      res => {
        this.obj={}
        this.obj=Object.assign({},res)
        var i;
        for (var x in res) {
          console.log(res[x.toString()])
          this.allItemList.push(res[x.toString()]);
          console.log( this.allItemList)  
      
      }}),// if get response, we can use the response which depends on the res.status(200).send(} in the api.js. in my case, I send token to here as response
      err =>console.log(err)// if get error, when show something to indicate the error
    }
  }

  toAdd(){
  this.add=true
  console.log(this.add)
  }
  isAdd(){
    console.log(this.add)
  return this.add
  }
  publishItem(){
    console.log(this.addItem)
    this._auth.adminAddItem(this.addItem)
    .subscribe( // uses observiable //when using ths obserable, we either get a response or error
      res => {
        console.log(res)
        this.add=false    
      }),// if get response, we can use the response which depends on the res.status(200).send(} in the api.js. in my case, I send token to here as response
      err =>console.log(err)// if get error, when show something to indicate the error
    }
    editItem(itemId){
      itemId()
    }

  

}
