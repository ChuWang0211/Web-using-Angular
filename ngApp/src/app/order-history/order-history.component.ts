import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';
import{ Router} from '@angular/router';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  orderHistoryList = []
  count=0;
  param = {token:''}
  obj = {}
  constructor(private _authService: AuthService, private _router:Router) { }

  ngOnInit(){
    this.param.token= localStorage.getItem('token')
    this._authService.getOrderHistory(this.param)
    .subscribe( // uses observiable //when using ths obserable, we either get a response or error
      res => {
        console.log(res)
        
        this.obj={}
        this.obj=Object.assign({},res)
        var i;
        for (i = 0; i < res.history.length; i++) {
         this.orderHistoryList.push(res.history[i]);
        } 
        console.log(this.orderHistoryList)
      },// if get response, we can use the response which depends on the res.status(200).send(} in the api.js. in my case, I send token to here as response
      err =>console.log(err)// if get error, when show something to indicate the error
      )
  }
  toStoreItemInfo(_id:string){
    localStorage.setItem("idItemDetail",_id)
    this._router.navigate(['/storeItemDetail']) 
        console.log(_id)
  }



}
