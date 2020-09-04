import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';
import{ Router} from '@angular/router';


@Component({
  selector: 'app-admin-order-management',
  templateUrl: './admin-order-management.component.html',
  styleUrls: ['./admin-order-management.component.css']
})
export class AdminOrderManagementComponent implements OnInit {
  allUserList = []
  param = {token:''}
  obj = {}
  constructor(private _authService: AuthService, private _router:Router) { }

  ngOnInit(): void {
    
    this.param.token= localStorage.getItem('token')
    this._authService.getallUsers(this.param)
    .subscribe( // uses observiable //when using ths obserable, we either get a response or error
      res => {
        console.log(res)
        
        // this.obj={}
        // this.obj=Object.assign({},res)
        // var i;
        // for (i = 0; i < res.length; i++) {
        //  this.allUserList.push(res.history[i]);
         
        // } 
        // console.log(this.allUserList)
      },// if get response, we can use the response which depends on the res.status(200).send(} in the api.js. in my case, I send token to here as response
      err =>console.log(err)// if get error, when show something to indicate the error
      )

  }

}
