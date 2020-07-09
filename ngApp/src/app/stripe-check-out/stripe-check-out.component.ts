import { Component, OnInit, Input, HostListener } from '@angular/core';
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';
import{ Router} from '@angular/router';
import Stripe from "stripe";
import {StripeCheckoutLoader} from 'ng-stripe-checkout';

@Component({
  selector: 'app-stripe-check-out',
  templateUrl: './stripe-check-out.component.html',
  styleUrls: ['./stripe-check-out.component.css']
})
export class StripeCheckOutComponent implements OnInit {

  constructor(private _eventServive:EventService,private _authService: AuthService, private _router:Router, private _stripeCheckoutLoader: StripeCheckoutLoader) { }


  ngOnInit() {
  }

}
