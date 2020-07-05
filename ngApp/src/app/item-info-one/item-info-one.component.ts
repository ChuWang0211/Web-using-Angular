import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import{ItemInfoService} from '../item-info.service'
import{ Router} from '@angular/router';
@Component({
  selector: 'app-item-info-one',
  templateUrl: './item-info-one.component.html',
  styleUrls: ['./item-info-one.component.css']
})
export class ItemInfoOneComponent implements OnInit {
  itemInfo_1 = []
  constructor(private _itemInfoService:ItemInfoService,private _authService: AuthService, private _router:Router) { }
  ngOnInit() {
    this._itemInfoService.getIteminfo_1()
    .subscribe(
      res=>this.itemInfo_1=res,
      err => console.log(err)
    )
  }

  getBack(){
    this._router.navigate(['/iteminfo_1']) 
  }

}
