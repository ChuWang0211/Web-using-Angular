import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  public urlParams = "";
  param = { token: '' }
  allParams = { token: '', password: '', login:false, oldPassword: ''}
  userPassword1 = { password: '' };
  userPassword2 = { password: '' };
  theOldPassword = {password:''}
  a=[]
  constructor(private _auth: AuthService, private _router: Router) { }

  changePassword() {

    console.log(this.userPassword1)
    console.log(this.userPassword2)

    
    if (this.userPassword1.password != this.userPassword2.password) {
      this.a = []
      this.a.push("The Password does not match!")
    }
      else {
      if (this.userPassword1.password.length <= 5) {
        this.a = []
        this.a.push("The Password must be at least 6 chacter l")
      } else {
        if (this._auth.loggedIn()){
          this.allParams.login = true;
          this.allParams.oldPassword = this.theOldPassword.password
          this.allParams.token = localStorage.getItem('token')
          this.a = []
          this.a.push("")
          this.allParams.password = this.userPassword1.password;
          this._auth.updatePassword(this.allParams)
              .subscribe( // uses observiable //when using ths obserable, we either get a response or error
                res => {
                  this.a.push(res.res)
                  console.log(res)
                })
          console.log(this.allParams.token)
        } else{
          this.allParams.login = false;
        
        this.a = []
        this.a.push("")
        this.allParams.token = this.param.token;
        this.allParams.password = this.userPassword1.password;
        this._auth.updatePassword(this.allParams)
            .subscribe( // uses observiable //when using ths obserable, we either get a response or error
              res => {
                this.a.push(res.res)
                console.log(res)
              })}
        }
      }
      

    }
  ngOnInit(): void {
    var url = new URLSearchParams(location.search).toString();
    this.param.token = url.substring(4, url.length);
    console.log(this.param.token)
    this._auth.updatePassword(this.param)
      .subscribe( // uses observiable //when using ths obserable, we either get a response or error
        res => {
          if (res.res == "cw") {
            if(this._auth.loggedIn()){
              this._router.navigate(['/changePassword'])
            }else{this._router.navigate(['/login'])}
            
          }
          console.log(res)
        })

  }
isChangePassword(){
  if(localStorage.getItem('changePassword')!=null){
    return true
  }
  return false
}

}
