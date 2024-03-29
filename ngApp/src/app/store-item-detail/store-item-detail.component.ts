import { Component, OnInit, ɵConsole } from '@angular/core';
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';
import{ ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-store-item-detail',
  templateUrl: './store-item-detail.component.html',
  styleUrls: ['./store-item-detail.component.css']
})
export class StoreItemDetailComponent implements OnInit {
  obj = {}
  id={token:''}
  ItemList=[]
  public urlParams="";
  private param={token:''}
  constructor(private _eventServive:EventService,private _auth: AuthService, private _router:Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    var url=new URLSearchParams(location.search).toString();
    console.log( url)
    this.param.token =url.substring(4,url.length);
 
    this._auth.verifyItem(this.param)
    .subscribe(
    res => {
      this.ItemList=[]
        this.obj={}
        this.obj=Object.assign({},res)
          this.ItemList.push(res);

    },err =>console.log(err)          
      )
  }
getBack(){
  this._router.navigate(['/storePage'])
}
putItemInCart(item){
  var bo = false
  this.id.token=localStorage.getItem('token')
  if(localStorage.getItem('token')==null){
    console.log("please login")
    this._router.navigate(['/login'])

  }else{
  this._auth.putItemIntoCart(this.id)
   .subscribe( // uses observiable //when using ths obserable, we either get a response or error
      res => {
        console.log(res)
        this.obj={}
        this.obj=Object.assign({},res)
        // var obj = JSON.parse(this.obj);
        if( res.cart.length!=0){     
          
          var i;
          var amount=0;
          for (i = 0; i < res.cart.length; i++) {
            if(item._id==this.obj['cart'][i]._id){
              amount=parseInt(this.obj['cart'][i].amount)+1
              this.obj['cart'][i]["amount"]=amount
              bo=true
              this._auth.addToDatavase(this.obj)
              .subscribe(
                res => {
                  console.log(res)})}
            else {}}}
          else {    
          }                
          if(bo==false){
            this.obj['cart'].push(item)
            bo=true
            console.log(this.obj)
            this._auth.addToDatavase(this.obj)
          .subscribe(
            res => {
              console.log(res)}
              )}else{}
            },err =>console.log(err)// if get error, when show something to indicate the error
            )}}}
