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
  costumer_email = {}
  selectedUser={email:''}
  constructor(private _authService: AuthService, private _router:Router) { }

  ngOnInit(): void {
    
    this.param.token= localStorage.getItem('token')
    this._authService.getallUsers(this.param)
    .subscribe( // uses observiable //when using ths obserable, we either get a response or error
      res => {

        this.obj={}
        this.obj=Object.assign({},res)
        var i;
        console.log(Object.keys(res).length)
        for (var x in res) {
          console.log(res[x.toString()])
          this.allUserList.push(res[x.toString()]);

          this.costumer_email[res[x.toString()].email]= []
       }
        console.log(this.costumer_email)
      },// if get response, we can use the response which depends on the res.status(200).send(} in the api.js. in my case, I send token to here as response
      err =>console.log(err)// if get error, when show something to indicate the error
      )

  }
  userOrders(email){
    this.selectedUser.email=email
    console.log(this.selectedUser)
    this._authService.selectedUserOrderHistory(this.selectedUser)
    .subscribe( // uses observiable //when using ths obserable, we either get a response or error
      res => {
        console.log(res)
        this.costumer_email[email]=[]
        for(var i=0; i<res.length;i++){
          this.costumer_email[email].push(res[i])
        }
       
      })
  }

}
