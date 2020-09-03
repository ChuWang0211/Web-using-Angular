import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  userEmail = { email: '' };
  constructor(private _auth: AuthService, private _router: Router) { }

  sendEmail() {
    console.log(this.userEmail)
    this._auth.checkIfEmailExist(this.userEmail)
      .subscribe( // uses observiable //when using ths obserable, we either get a response or error
        res => {
          console.log(res)
        })
  }

  ngOnInit(): void {
  }

}
