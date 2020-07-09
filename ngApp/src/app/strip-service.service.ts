import { Injectable } from '@angular/core';
import Stripe from "stripe";
import {StripeCheckoutLoader, StripeCheckoutHandler} from 'ng-stripe-checkout';

@Injectable({
  providedIn: 'root'
})
export class StripServiceService {

  private stripeCheckoutHandler: StripeCheckoutHandler;
  constructor(private stripeCheckoutLoader: StripeCheckoutLoader) { 
  //    const stripe = new Stripe('sk_test_...', {
  //   apiVersion: '2020-03-02',
  // });
  // const createCustomer = async () => {
  //   const params: Stripe.CustomerCreateParams = {
  //     description: 'test customer',
  //   };
  
  //   const customer: Stripe.Customer = await stripe.customers.create(params);
  
  //   console.log(customer.id);
  // };
  // createCustomer();
  // // LatestApiVersion

}
public ngAfterViewInit() {
  this.stripeCheckoutLoader.createHandler({
      key: 'pk_test_abcdefghijklmnopqrstuvwxyz',
      token: (token) => {
          // Do something with the token...
          console.log('Payment successful!', token);
      }
  }).then((handler: StripeCheckoutHandler) => {
      this.stripeCheckoutHandler = handler;
  });
}
public onClickBuy() {
  this.stripeCheckoutHandler.open({
    amount: 1500,
    currency: 'EUR',
}).then((token) => {
    // Do something with the token...
    console.log('Payment successful!', token);
}).catch((err) => {
    // Payment failed or was canceled by user...
    if (err !== 'stripe_closed') {
        throw err;
    }
});
}

public onClickCancel() {
  // If the window has been opened, this is how you can close it:
  this.stripeCheckoutHandler.close();
}
}
