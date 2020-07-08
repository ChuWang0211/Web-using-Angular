import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';
import{ Router} from '@angular/router';
@Component({
  selector: 'app-store-item-detail',
  templateUrl: './store-item-detail.component.html',
  styleUrls: ['./store-item-detail.component.css']
})
export class StoreItemDetailComponent implements OnInit {
  storeItemDetail = []
  constructor(private _eventServive:EventService,private _authService: AuthService, private _router:Router) {

  }

ngOnInit() {
  this._eventServive.getStoreItemDetail()
  .subscribe(
    res=>this.storeItemDetail=res,
    err => console.log(err)
  )
}
getBack(){
  this._router.navigate(['/storePage'])
}}
