import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  a = [];
  userEmail = { email: '' };
  constructor(private _auth: AuthService, private _router: Router) { }

  sendEmail() {
    var sent = true;
    console.log(this.userEmail)
    this._auth.checkIfEmailExist(this.userEmail)
      .subscribe( // uses observiable //when using ths obserable, we either get a response or error
        res => {
          if (res.res == "error") {
            this.a = []
            this.a.push("Error!")
            sent = true;
          } else {
            this.a = []
            this.a.push("please check email thanks")
          }
        })

  }

  ngOnInit(): void {
  }

}
