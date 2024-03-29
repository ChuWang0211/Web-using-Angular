import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';
import{ Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

declare var paypal;
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


export class CartComponent implements OnInit {
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;

  product = {
    price: 0,
    description: 'used couch, decent condition',
    //img: 'assets/couch.jpg'
  };
  total = 0

  paidFor = false;

  constructor(private _eventServive:EventService, private _auth: AuthService, private _router: Router,private http:HttpClient) { }
  itemId = ""
  items=[]
  tokeninfo={token:''}
  costumer=[]
  obj = {}
  ngOnInit() {
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: this.product.description,
                amount: {
                  currency_code: 'USD',
                  value: this.total
                }
              }
            ]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          this.paidFor = true;
          this._router.navigate(['/payment'])
          console.log(order);
        },
        onError: err => {
          console.log(err);
        }
      })
      .render(this.paypalElement.nativeElement);
    console.log('paid for' + this.paidFor)
  
    this.tokeninfo.token = localStorage.getItem("token")
    this._auth.putItemIntoCart( this.tokeninfo)
      .subscribe( // uses observiable //when using ths obserable, we either get a response or error
         res => {
          this.total=0
           console.log(res)
           this.costumer=[]
           this.costumer.push(res)
           
           this.obj={}
           this.obj=Object.assign({},res)
           var i;
           for (i = 0; i < res.cart.length; i++) {
            this.items.push(res.cart[i]);
            this.total=this.total+res.cart[i].amount * res.cart[i].price
           } 
           console.log(this.total)
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
  purchase(items){

  }
}
