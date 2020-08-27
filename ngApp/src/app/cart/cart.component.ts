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
  // obj = {}
  token_with_iteminfo={token: ''}
  ngOnInit(): void {
    this.token_with_iteminfo.token = localStorage.getItem("token")
    this._auth.putItemIntoCart(this.token_with_iteminfo)
      .subscribe( // uses observiable //when using ths obserable, we either get a response or error
         res => {
           console.log(res)
          //  this.obj={}
          //  this.obj=Object.assign({},res.cart)
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

}
