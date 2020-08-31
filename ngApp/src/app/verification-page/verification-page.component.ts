import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';
import{ Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-verification-page',
  templateUrl: './verification-page.component.html',
  styleUrls: ['./verification-page.component.css']
})
export class VerificationPageComponent implements OnInit {

  events = []
  constructor(private _eventServive:EventService, private _authService: AuthService, private _router: Router,private http:HttpClient) { }

  ngOnInit() { 
    this._eventServive.getVerificationPage()
    .subscribe(
      res=>this.events=res,
      err => console.log(err)
    )
  }
}
