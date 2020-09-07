import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'; 
import{ Router} from '@angular/router';// import the router in order to navigate the from login to specail event
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  ItemArray = {storeItem:[]}
  constructor(private _auth:AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  toAllOrder(){
    this._router.navigate(['/adminViewUserOrderHistory'])
  }

  itemPManagePage(){
    this._router.navigate(['/adminItemManagePage'])
  }


}
