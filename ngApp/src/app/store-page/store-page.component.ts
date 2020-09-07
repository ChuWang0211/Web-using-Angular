import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';
import{ Router} from '@angular/router';
@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css']
})
export class StorePageComponent implements OnInit {
  itemId = ""
  itemDetail=[]
  obj = {}
  id={token:''}
  allItemList=[]

  constructor(private _eventServive:EventService,private _authService: AuthService, private _router:Router) { }

  ngOnInit(){

    if(localStorage.getItem('token')==null){
      console.log("please login")
      this._router.navigate(['/login'])
    }else{
    this.id.token=localStorage.getItem('token')
    this._authService.adminGetAllItem(this.id)
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
  toStoreItemInfo(itemId:String){
    console.log(itemId)
    // this._router.navigate(['/storeItemDetail' +decodeURI('/?_id=')+ itemId]) 
    this._router.navigate(['/storeItemDetail/'], { queryParams: { _id: itemId } });
    

  }

}
