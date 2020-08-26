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
      },// if get response, we can use the response which depends on the res.status(200).send(} in the api.js. in my case, I send token to here as response
      err =>console.log(err)// if get error, when show something to indicate the error

  // localStorage.log('item',itemId)
   )}

}
