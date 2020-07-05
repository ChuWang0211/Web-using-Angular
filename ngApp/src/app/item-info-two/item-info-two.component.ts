import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import{ItemInfoService} from '../item-info.service'
import{ Router} from '@angular/router';
@Component({
  selector: 'app-item-info-two',
  templateUrl: './item-info-two.component.html',
  styleUrls: ['./item-info-two.component.css']
})
export class ItemInfoTwoComponent implements OnInit {
  itemInfo_2 = []
  constructor(private _itemInfoService:ItemInfoService,private _authService: AuthService, private _router:Router) { }

  ngOnInit() {
    this._itemInfoService.getIteminfo_2()
    .subscribe(
      res=>this.itemInfo_2=res,
      err => console.log(err)
    )
  }
}
