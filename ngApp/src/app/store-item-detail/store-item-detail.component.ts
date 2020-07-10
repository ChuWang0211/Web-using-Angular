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
  constructor(private _eventServive:EventService,private _authService: AuthService, private _router:Router) {

  }

ngOnInit() {
  this.itemId=localStorage.getItem('idItemDetail')
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
putItemInCart(){
  console.log(this.itemDetail)

}

}
