import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';
import{ Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events = []
  constructor(private _eventServive:EventService, private _authService: AuthService, private _router: Router,private http:HttpClient) { }

  ngOnInit() { 
    this._eventServive.getEvents()
    .subscribe(
      res=>this.events=res,
      err => console.log(err)
    )
  }
  toItemInfo(_id:String){

    this._router.navigate(['/iteminfo_1']) 
        console.log("_id")
  }

}
