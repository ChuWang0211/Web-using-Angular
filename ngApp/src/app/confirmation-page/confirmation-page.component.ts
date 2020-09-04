import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';
import{ Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.css']
})
export class ConfirmationPageComponent implements OnInit {
  public urlParams="";
  private param={token:''}
  constructor(private _eventServive:EventService, private _authService: AuthService, private _router: Router,private http:HttpClient) { }

  
  ngOnInit(): void {
    var url=new URLSearchParams(location.search).toString();
    this.param.token =url.substring(4,url.length);
    this._authService.verifyUser(this.param)
    .subscribe(
    res => {
      console.log(res)

    },err =>console.log(err)          
      )}
  
}
