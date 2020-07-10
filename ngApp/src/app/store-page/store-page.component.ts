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
  storePage = []
  count=0;
  constructor(private _eventServive:EventService,private _authService: AuthService, private _router:Router) { }

  ngOnInit(){
    this._eventServive.getStorePage()
    .subscribe(
      res=>this.storePage=res,
      err => console.log(err)
    )
  }
  toStoreItemInfo(_id:string){
    localStorage.setItem("idItemDetail",_id)
    this._router.navigate(['/storeItemDetail']) 
        console.log(_id)

        
  }

}
