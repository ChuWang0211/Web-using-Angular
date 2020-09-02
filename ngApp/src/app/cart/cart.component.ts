import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';
import{ Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private _eventServive:EventService, private _auth: AuthService, private _router: Router,private http:HttpClient) { }
  itemId = ""
  items=[]
  tokeninfo={token:''}
  costumer=[]
  obj = {}
  ngOnInit(): void {
    this.tokeninfo.token = localStorage.getItem("token")
    this._auth.putItemIntoCart( this.tokeninfo)
      .subscribe( // uses observiable //when using ths obserable, we either get a response or error
         res => {
           console.log(res)
           this.costumer=[]
           this.costumer.push(res)
           
           this.obj={}
           this.obj=Object.assign({},res)
           var i;
           for (i = 0; i < res.cart.length; i++) {
            this.items.push(res.cart[i]);
           } 

           console.log(this.items)
           
         },// if get response, we can use the response which depends on the res.status(200).send(} in the api.js. in my case, I send token to here as response
         err =>console.log(err)// if get error, when show something to indicate the error
         )
  }
  toItemInfo(_id:any){
    console.log(_id)
    this._router.navigate(['/iteminfo_1']) 

  }
  removeOne(item){
    if(item.amount==0){}
    else{
      item.amount = item.amount-1
      // var obj = JSON.parse(this.costumer);
      var i = 0;
      for (i = 0; i < this.costumer[0].cart.length; i++) {
        if(this.obj['cart'][i]["_id"]==item._id){
          this.obj['cart'][i]["amount"] = item.amount
          // console.log( this.costumer[0].cart[i]._id)
          // console.log(item._id)
          this._auth.addToDatavase(this.obj)
          .subscribe(
            res => {
              console.log(res)})
      
        }else{console.log("can not find")}
       } 
      
    }

  }
  addOne(item){
    console.log(item)
    item.amount = item.amount+1
    // var obj = JSON.parse(this.costumer);
    var i = 0;
    for (i = 0; i < this.costumer[0].cart.length; i++) {
      if(this.obj['cart'][i]["_id"]==item._id){
        this.obj['cart'][i]["amount"] = item.amount
        // console.log( this.costumer[0].cart[i]._id)
        // console.log(item._id)
        this._auth.addToDatavase(this.obj)
        .subscribe(
          res => {
            console.log(res)})
    
      }else{console.log("can not find")}
     } 
  }
}
