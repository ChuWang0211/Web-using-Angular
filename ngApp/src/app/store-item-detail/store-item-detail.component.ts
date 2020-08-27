import { Component, OnInit, ɵConsole } from '@angular/core';
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';
import{ Router} from '@angular/router';
@Component({
  selector: 'app-store-item-detail',
  templateUrl: './store-item-detail.component.html',
  styleUrls: ['./store-item-detail.component.css']
})
export class StoreItemDetailComponent implements OnInit {
  itemId = ""
  storeItemDetail = []
  itemDetail=[]
  obj = {}
  token_with_iteminfo={token: '', iteminfo: ''}
  constructor(private _eventServive:EventService,private _auth: AuthService, private _router:Router) {
  }
ngOnInit() {
  this.itemId =this._auth.getItemId()
  this._eventServive.getEvents()
    .subscribe(
      res=>{
        this.storeItemDetail=res
        var i=0;
        for (i = 0; i < this.storeItemDetail.length; i++) {
          if(this.storeItemDetail[i]["_id"]==this.itemId){
            this.itemDetail[0]=this.storeItemDetail[i];

          }
          else{
          }
        }
      },
      err => console.log(err)
    )
}
getBack(){
  this._router.navigate(['/storePage'])
}
putItemInCart(itemId){

  console.log(itemId)
  // console.log(this.itemDetail[0])
 this.token_with_iteminfo.iteminfo=this.itemDetail[0]
 this.token_with_iteminfo.token = localStorage.getItem("token")
  this._auth.putItemIntoCart(this.token_with_iteminfo)
   .subscribe( // uses observiable //when using ths obserable, we either get a response or error
      res => {
        console.log(res)
        this.obj={}
        this.obj=Object.assign({},res)
        // var obj = JSON.parse(this.obj);
        if( res.cart.length==0){        
          this.obj['cart'].push(this.itemDetail[0])
          this._auth.addToDatavase(this.obj)
          .subscribe(
            res => {
              console.log(res)})
        }
          else { 
            var i;
            var amount=0;
            for (i = 0; i < res.cart.length; i++) {
              if(this.itemDetail[0]._id==this.obj['cart'][i]._id){
                amount=parseInt(this.obj['cart'][i].amount)+1
                this.obj['cart'][i]["amount"]=amount
                this._auth.addToDatavase(this.obj)
                .subscribe(
                  res => {
                    console.log(res)})
              }
              else{
                this.obj['cart'].push(this.itemDetail[0])
                console.log(this.obj)
                this._auth.addToDatavase(this.obj)
                .subscribe(
                  res => {
                    console.log(res)}
                    )}}}},err =>console.log(err)// if get error, when show something to indicate the error
      )}}
