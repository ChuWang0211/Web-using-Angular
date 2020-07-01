import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {}// set this empty variable and bind the input 
  constructor() { }

  ngOnInit(): void {
  }

  registerUser(){//this is the register user method/function.  
    console.log(this.registerUserData)
  }
}
