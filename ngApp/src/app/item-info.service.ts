import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import{ Router} from '@angular/router';

@Injectable()
export class ItemInfoService {
  private _itemUrl_1 = "http://localhost:3000/api/iteminfo_1";
  private _itemUrl_2 = "http://localhost:3000/api/iteminfo_2";

  constructor(private http:HttpClient, private _router:Router) { }

  getIteminfo_1(){
    return this.http.get<any>(this._itemUrl_1)// get does not need second prameter
  }

  getIteminfo_2(){
    return this.http.get<any>(this._itemUrl_2)// get does not need second prameter
  }
}
