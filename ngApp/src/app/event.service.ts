import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import{ Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class EventService {
  private _eventUrl = "http://localhost:3000/api/events"
  private __special_eventUrl= "http://localhost:3000/api/special"
  private _storePageUrl = "http://localhost:3000/api/storePage"

  constructor(private http:HttpClient,private _router: Router) { }

  getEvents(){
    return this.http.get<any>(this._eventUrl)// get does not need second prameter
  }

  getSpecialEvents(){
    return this.http.get<any>(this.__special_eventUrl)// get does not need second prameter
  }
  getStorePage(){
    return this.http.get<any>(this._storePageUrl)// get does not need second prameter
  }
}
