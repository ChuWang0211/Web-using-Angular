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
      // this.obj={}
      // this.obj=Object.assign({},res)
      // var obj = JSON.parse(this.obj);
      // if( res.verified=='no'){        

      // }
      //   else { 
      //     var i;
      //     var amount=0;
      //     for (i = 0; i < res.cart.length; i++) {
      //       if(this.itemDetail[0]._id==this.obj['cart'][i]._id){
      //         amount=parseInt(this.obj['cart'][i].amount)+1
      //         this.obj['cart'][i]["amount"]=amount
      //         this._auth.addToDatavase(this.obj)
      //         .subscribe(
      //           res => {
      //             console.log(res)})
      //       }
      //       else{
      //         this.obj['cart'].push(this.itemDetail[0])
      //         console.log(this.obj)
      //         this._auth.addToDatavase(this.obj)
      //         .subscribe(
      //           res => {
      //             console.log(res)}
      //             )}}}
    },err =>console.log(err)
                  
                  )
    // let userToken = this.urlParams[0].substring(2, this.urlParams[0].length); 
    // this.urlParams.push(userToken)
  }
  
}
